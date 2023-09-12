package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"github.com/a-camarillo/workout-app/server/routes"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("root."))
	})

	r.Mount("/workouts", routes.WorkoutsRoutes())
	
	if err := http.ListenAndServe(":3333", r); err != nil {
		log.Fatal(err)
	}
}
