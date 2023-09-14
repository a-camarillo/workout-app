package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/jwtauth/v5"

	"github.com/a-camarillo/workout-app/server/auth"
	"github.com/a-camarillo/workout-app/server/routes"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("root."))
	})

	// Unprotected routes
	r.Group(func(r chi.Router) {
		r.Mount("/signup", routes.SignupRoutes())
	})

	// Protected routes
	r.Group(func(r chi.Router) {
		
		tokenAuth := auth.NewTokenAuth()

		r.Use(jwtauth.Verifier(tokenAuth.Auth))

		r.Use(jwtauth.Authenticator)
		
		r.Mount("/login", routes.LoginRoutes())
		r.Mount("/workouts", routes.WorkoutsRoutes())
		r.Mount("/users", routes.UsersRoutes())
	})	
	
	if err := http.ListenAndServe(":3333", r); err != nil {
		log.Fatal(err)
	}
}
