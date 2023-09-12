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

func UsersRoutes() chi.Router {
	
	router := chi.NewRouter()

	router.Post("/", func(w http.ResponseWriter, r *http.Request) {
	
		var user db.User

		body := json.NewDecoder(r.Body)

		err := body.Decode(&user)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		client := db.OpenConnection()

		userClient := db.UserClient{
			Client: client,
		}
		
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		err = userClient.CreateUser(ctx, user.Username, user.Password)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			log.Print(err)
		}

		w.WriteHeader(http.StatusCreated)

		defer client.Disconnect(context.Background())

	})

	return router
}
