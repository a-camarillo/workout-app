package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func WorkoutsRoutes() chi.Router {

	r := chi.NewRouter()
	
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Get request made for workouts data\n"))
	})
	

	r.Post("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Post request made for workouts data\n"))
	})

	return r
}
