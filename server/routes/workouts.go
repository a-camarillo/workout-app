package routes

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/a-camarillo/workout-app/server/db"
	"github.com/go-chi/chi/v5"
)

func WorkoutsRoutes() chi.Router {

	router := chi.NewRouter()
	
	router.Get("/", func(w http.ResponseWriter, r *http.Request) {

		err := r.ParseForm()
		if err != nil {
			log.Print(err)
		}

		userID := r.Form["userID"][0]
		fmt.Println(r.Form["userID"][0])

		client := db.OpenConnection()
		
		workoutClient := db.WorkoutClient{
			Client: client,
		}

		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		workout, err := workoutClient.ReadWorkout(ctx, userID)
		if err != nil {
			log.Print(err)
		}

		
		w.Header().Set("Content-Type", "application/json")
		err = json.NewEncoder(w).Encode(workout)
		if err != nil {
			log.Print(err)
		}

		defer client.Disconnect(context.Background())
		
	})
	

	router.Post("/", func(w http.ResponseWriter, r *http.Request) {

		var workout db.Workout

		body := json.NewDecoder(r.Body)
		
		err := body.Decode(&workout)

		// break out of function if there is a request error
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
	
		client := db.OpenConnection()
		
		workoutClient := db.WorkoutClient{
			Client: client,
		}

		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		err = workoutClient.CreateWorkout(ctx, workout.Exercises, workout.UserID)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			log.Print(err)
		}

		w.WriteHeader(http.StatusCreated)

		defer client.Disconnect(context.Background())
		
	})

	return router
}
