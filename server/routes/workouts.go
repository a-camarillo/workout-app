package routes

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/a-camarillo/workout-app/server/db"
	"github.com/go-chi/chi/v5"
)

func WorkoutsRoutes() chi.Router {

	router := chi.NewRouter()
	
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
