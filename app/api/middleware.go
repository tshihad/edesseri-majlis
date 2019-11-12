package api

import (
	"context"
	"majlis/app/core"
	"net/http"

	"github.com/go-chi/chi"

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
				w.WriteHeader(http.StatusNonAuthoritativeInfo)
				return
			}
			ctx := context.WithValue(r.Context(), core.MEMBERID_TAG, memberID)
			next.ServeHTTP(w, r.WithContext(ctx))
		}
		return http.HandlerFunc(fn)
	}
}

func (a *App) validateAdmin() func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			token := r.Header.Get("Authorization")
			if token == "" {
				w.WriteHeader(http.StatusForbidden)
				a.Error("Autherization header not set")
				return
			}
			err := a.VerifyAdmin(token)
			if err != nil {
				a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to authenticate admin", err)
				return
			}
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

func (a *App) setMemeberID() func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			memberID := chi.URLParam(r, core.MEMBERID_TAG)
			ctx := context.WithValue(r.Context(), core.MEMBERID_TAG, memberID)
			next.ServeHTTP(w, r.WithContext(ctx))
		}
		return http.HandlerFunc(fn)
	}
}
