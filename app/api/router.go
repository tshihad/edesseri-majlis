package api

import (
	"majlis/app/core"
	"net/http"
	"strings"

	"github.com/go-chi/chi"
)

var memberPattern = "/{member_id:" + core.MEMBER_PREFIX + "[0-9]{5}}"

// Router api routing. to create new api list url here
func (a *App) Router() http.Handler {
	r := chi.NewRouter()
	r.Route("/majlis", func(r chi.Router) {
		r.Use(loggerhandler(a.FieldLogger))
		r.With(validateUser(a.FieldLogger)).Route("/member", func(r chi.Router) {
			r.Get(memberPattern, a.handleGetMember)
			r.Post("/", a.handlePostMember)
			r.Put(memberPattern, a.handlePutMember)
			r.Delete(memberPattern, a.handleDeleteMember)
			r.Get("/subscription"+memberPattern, a.handleGetSubscription)
		})
		r.With(validateAdmin(a.FieldLogger)).Route("/admin", func(r chi.Router) {
			r.Route("/gallery", func(r chi.Router) {
				r.Post("/", a.handlePostEGallery)
				r.Delete("/{id}", a.handleDeleteEGallery)
			})
			r.Route("/subscription", func(r chi.Router) {
				r.Post("/", a.handlePostSubscription)
				r.Get("/member"+memberPattern, a.handleGetSubscription)
				r.Delete("/{id}", a.handleDeleteSubscription)
			})
			r.Get("/members", a.handleGetMembers)
			r.Get("/members/limit={limit}&offset={offset}", a.handleGetMembers)
		})
		r.Get("/gallery/{category:(all|"+strings.Join(core.CATEGORIES, "|")+")}", a.handleGetEGallerys)
	})
	return r
}
