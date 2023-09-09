package db

import (
	"context"

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
	client *mongo.Client
}

func (u *UserClient) CreateUser(ctx context.Context, username string, password string) error {	
	
	var userCheck User

	usersCollection := u.client.Database("database").Collection("users")

	err := usersCollection.FindOne(ctx, bson.M{"username": username, "password": password}).Decode(&userCheck)

	if err == mongo.ErrNoDocuments {

		newUser := User{
			UserID: uuid.NewString(),
			Username: username,
			Password: password,
		}

		_, err := usersCollection.InsertOne(ctx, newUser)
		
		if err != nil {
			return err
		}
	}

	if err != nil {
		return err
	}

	return err

}

func (u *UserClient) ReadUser(ctx context.Context, username string, password string) (*User, error) {	
	
	var user User

	usersCollection := u.client.Database("database").Collection("users")

	err := usersCollection.FindOne(ctx, bson.M{"username": username, "password": password}).Decode(&user)

	if err == mongo.ErrNoDocuments {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (u *UserClient) UpdateUser(ctx context.Context, username string, userID primitive.ObjectID) error {
	
	usersCollection := u.client.Database("database").Collection("users")

	_, err := usersCollection.UpdateOne(ctx, bson.D{{Key: "_id", Value: userID}}, bson.D{{Key: "$set", Value: bson.D{{Key: "username", Value: username}}}})

	if err != nil {
		return err
	}

	return nil
}

func (u *UserClient) DeleteUser(ctx context.Context, id primitive.ObjectID) error {
	
	usersCollection	:= u.client.Database("database").Collection("users")

	_, err := usersCollection.DeleteOne(ctx, bson.M{"_id":id})

	if err != nil {
		return err
	}

	return err
}


