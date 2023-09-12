package routes

import (
	"context"
	"encoding/json"
	"log"

	"net/http"
	"time"

	"github.com/a-camarillo/workout-app/server/db"
	"github.com/go-chi/chi/v5"
	"golang.org/x/crypto/bcrypt"
)

func UsersRoutes() chi.Router {
	
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

		passwordBytes, err := bcrypt.GenerateFromPassword([]byte(user.Password), 12)
		if err != nil {
			log.Print(err)
		}

		passwordHash := string(passwordBytes)
		
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		err = userClient.CreateUser(ctx, user.Username, passwordHash)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			log.Print(err)
		}

		w.WriteHeader(http.StatusCreated)

		defer client.Disconnect(context.Background())

	})

	return router
}
