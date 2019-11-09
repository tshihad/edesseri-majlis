package api

import (
	"context"
	"net/http"

	"github.com/go-chi/cors"

	"github.com/sirupsen/logrus"
)

func (a *App) validateUser() func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			token := r.Header.Get("Authorization")
			if token == "" {
				w.WriteHeader(http.StatusForbidden)
				a.Error("Autherization header not set")
				return
			}
			memberID, err := a.VerifyToken(token)
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
			fields := logrus.Fields{}
			for i, v := range r.Header {
				for _, vv := range v {
					fields[i] = vv
				}
			}
			fields["Path"] = r.URL.Path
			fields["Method"] = r.Method
			logger.WithFields(fields).Info("HTTP Logger")
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
