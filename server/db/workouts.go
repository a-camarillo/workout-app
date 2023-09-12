package db

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Set struct {
	Reps 	int32 	`bson:"reps,omitempty"`
	Weight 	float32 `bson:"weight,omitempty"`
}

type Exercise struct {
	Name	string	`bson:"name,omitempty"`
	Sets	[]Set	`bson:"sets,omitempty"`
}

type Workout struct {
	ID			primitive.ObjectID 	`bson:"_id,omitempty"`
	CreatedAt	time.Time 			`bson:"createdAt,omitempty"`
	UserID		string				`bson:"userID,omitempty"`
	Exercises	[]Exercise			`bson:"exercises,omitempty"`
}

type WorkoutClient struct {
	Client *mongo.Client
}

func (w *WorkoutClient) CreateWorkout(ctx context.Context, exercises []Exercise, userID string) error {
	

	workoutCollections := w.Client.Database("database").Collection("workouts")
	
	newWorkout := Workout{
		CreatedAt: time.Now(),
		UserID: userID,
		Exercises: exercises,
	}

	_, err := workoutCollections.InsertOne(ctx, newWorkout)

	if err != nil {
		return err
	}

	return nil
}

func (w *WorkoutClient) ReadWorkout(ctx context.Context, userID string) (*Workout, error) {
	
	var workout Workout

	workoutCollections := w.Client.Database("database").Collection("workouts")

	err := workoutCollections.FindOne(ctx, bson.M{"userID": userID}).Decode(&workout)

	if err == mongo.ErrNoDocuments {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	return &workout, nil
}

func (w *WorkoutClient) DeleteWorkout(ctx context.Context, workoutID primitive.ObjectID) error {

	workoutsCollection := w.Client.Database("database").Collection("workouts")

	_, err := workoutsCollection.DeleteOne(ctx, bson.M{"_id": workoutID})

	if err != nil {
		return err
	}

	return nil
}





