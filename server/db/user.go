package db

import (
	"context"
	"errors"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type User struct {
	ID			primitive.ObjectID	`bson:"_id,omitempty"`
	UserID		string				`bson:"userID,omitempty"`		
	Username 	string 				`bson:"username,omitempty"`
	Password 	string 				`bson:"password,omitempty"`	
}

type UserClient struct {
	Client *mongo.Client
}

func (u *UserClient) CreateUser(ctx context.Context, username string, password string) error {	
	
	var userCheck User

	usersCollection := u.Client.Database("database").Collection("users")

	result := usersCollection.FindOne(ctx, bson.M{"username": username}).Decode(&userCheck)

	if result == mongo.ErrNoDocuments {

		newUser := User{
			UserID: uuid.NewString(),
			Username: username,
			Password: password,
		}

		_, err := usersCollection.InsertOne(ctx, newUser)
		
		if err != nil {
			return err
		}
	} else {
		return errors.New("username submitted already exists")
	}

	return nil
}

func (u *UserClient) ReadUser(ctx context.Context, username string, password string) (*User, error) {	
	
	var user User

	usersCollection := u.Client.Database("database").Collection("users")

	result := usersCollection.FindOne(ctx, bson.M{"username": username, "password": password}).Decode(&user)

	if result == mongo.ErrNoDocuments {
		return nil, errors.New("user could not be found, username or password are incorrect")
	}

	return &user, nil
}

func (u *UserClient) ReadUserByName(ctx context.Context, username string) (*User, error) {		
	var user User

	usersCollection := u.Client.Database("database").Collection("users")

	result := usersCollection.FindOne(ctx, bson.M{"username": username}).Decode(&user)

	if result == mongo.ErrNoDocuments {
		return nil, errors.New("user could not be found, username is incorrect or does not exist")
	}

	return &user, nil
}

func (u *UserClient) UpdateUser(ctx context.Context, username string, userID primitive.ObjectID) error {
	
	usersCollection := u.Client.Database("database").Collection("users")

	_, err := usersCollection.UpdateOne(ctx, bson.D{{Key: "_id", Value: userID}}, bson.D{{Key: "$set", Value: bson.D{{Key: "username", Value: username}}}})

	if err != nil {
		return err
	}

	return nil
}

func (u *UserClient) DeleteUser(ctx context.Context, userID primitive.ObjectID) error {
	
	usersCollection	:= u.Client.Database("database").Collection("users")

	_, err := usersCollection.DeleteOne(ctx, bson.M{"_id":userID})

	if err != nil {
		return err
	}

	return nil
}


