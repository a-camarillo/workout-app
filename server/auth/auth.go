package auth

import (
	"log"
	"os"

	"github.com/go-chi/jwtauth/v5"
	"github.com/joho/godotenv"
)

type TokenAuth struct {
	Auth *jwtauth.JWTAuth
}

func NewTokenAuth() *TokenAuth {
	if err := godotenv.Load(); err != nil {
		log.Println(".env file not found")
	}

	jwtSecret := os.Getenv("JWT_SECRET")

	auth := jwtauth.New("HS256", []byte(jwtSecret), nil)
	
	return &TokenAuth{
		Auth: auth,
	}
}

func (t *TokenAuth) GenerateToken(username string) string {

	_, tokenString, _ := t.Auth.Encode(map[string]interface{}{"name": username})

	return tokenString
}
