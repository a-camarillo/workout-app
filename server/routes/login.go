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

func LoginRoutes() chi.Router {
	
	router := chi.NewRouter()

	router.Get("/", func(w http.ResponseWriter, r *http.Request) {
	
		err := r.ParseForm()
		if err != nil {
			log.Print(err)
			return
		}

		userName := r.Form["Username"][0]

		client := db.OpenConnection()

		userClient := db.UserClient{
			Client: client,
		}

		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()	
		
		user, err := userClient.ReadUserByName(ctx, userName)
		if err != nil {
			log.Print(err)
			return
		}
		
		w.Header().Set("Content-Type", "application/json")
		err = json.NewEncoder(w).Encode(&user)
		if err != nil {
			log.Print(err)
		}

		defer client.Disconnect(context.Background())

	})

	return router

}
