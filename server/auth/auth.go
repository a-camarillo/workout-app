package auth

import (
	"log"
	"os"
	"time"

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

func (t *TokenAuth) GenerateAccessToken(username string) string {

	claims := map[string]interface{}{"name":username}
	
	jwtauth.SetIssuedNow(claims)
	jwtauth.SetExpiryIn(claims, time.Minute)
	

	_, tokenString, _ := t.Auth.Encode(claims)

	return tokenString
}

func (t *TokenAuth) GenerateRefreshToken() string {
	
	claims := map[string]interface{}{}

	jwtauth.SetIssuedNow(claims)
	jwtauth.SetExpiryIn(claims, 10*time.Minute)
	

	_, tokenString, _ := t.Auth.Encode(claims)

	return tokenString
}
