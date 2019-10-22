package api

import (
	"net/http"

	"github.com/go-chi/chi"
)

// Router api routing. to create new api list url here
func (a *App) Router() http.Handler {
	r := chi.NewRouter()
	r.Route("/majlis", func(r chi.Router) {
		r.Use(loggerhandler(a.FieldLogger))
		// user routers
		r.With(validateUser(a.FieldLogger)).Route("/member", func(r chi.Router) {
			r.Get("/{member_id}", a.handleGetMember)
		})
		// admin routers
		r.With(validateAdmin(a.FieldLogger)).Route("/admin", func(r chi.Router) {

		})
	})
	return r
}
