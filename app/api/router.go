package api

import (
	"net/http"

	"github.com/go-chi/chi"
)

// Router api routing. to create new api list url here
func (a *App) Router() http.Handler {
	r := chi.NewRouter()
	r.Route("/majlis", func(r chi.Router) {
		// user routers
		r.With(nil).Route("/user", func(r chi.Router) {

		})
		// admin routers
		r.With(nil).Route("/admin", func(r chi.Router) {

		})
	})
	return r
}
