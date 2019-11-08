package api

import (
	"context"
	"net/http"
	"strings"

	"github.com/go-chi/cors"

	"github.com/sirupsen/logrus"
)

func (a *App) validateUser() func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			tokenString := r.Header.Get("Autherization")
			if tokenString == "" {
				w.WriteHeader(http.StatusForbidden)
				a.Error("Autherization header not set")
				return
			}
			tokenArr := strings.Split(tokenString, " ")
			if len(tokenArr) != 2 || tokenArr[0] != "Bearer" {
				w.WriteHeader(http.StatusForbidden)
				a.Error("Invalid autherization, failed to parse Bearer")
				return
			}
			memberID, err := a.VerifyToken(tokenArr[1])
			if err != nil {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
			ctx := context.WithValue(r.Context(), "member_id", memberID)
			next.ServeHTTP(w, r.WithContext(ctx))
		}
		return http.HandlerFunc(fn)
	}
}

func validateAdmin(logger logrus.FieldLogger) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			// validate user
			next.ServeHTTP(w, r)
		}
		return http.HandlerFunc(fn)
	}
}
func loggerhandler(logger logrus.FieldLogger) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			next.ServeHTTP(w, r)
		}
		return http.HandlerFunc(fn)
	}
}

func getCors() func(http.Handler) http.Handler {
	cors := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	})
	return cors.Handler
}
