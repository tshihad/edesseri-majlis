package api

import (
	"majlis/app/core"
	"net/http"
	"strings"

	"github.com/go-chi/chi"
)

var memberPattern = "/{member_id:" + core.MEMBER_PREFIX + "[0-9]{4}}"

// Router api routing. to create new api list url here
func (a *App) Router() http.Handler {
	r := chi.NewRouter()
	r.Route("/majlis", func(r chi.Router) {
		r.Use(loggerhandler(a.FieldLogger))
		r.Use(getCors())

		r.Post("/signin", a.handleSignin)
		r.Post("/add/member", a.handlePostMember)
		r.Post("/add/member/image", a.handlePostProfileImage)

		r.Get("/upcoming-events", a.handleGetUpcomingEvents)

		r.With(a.validateUser()).Route("/member", func(r chi.Router) {
			r.Get("/", a.handleGetMember)
			r.Put("/", a.handlePutMember)
			r.Delete("/", a.handleDeleteMember)
			r.Get("/subscription", a.handleGetSubscription)
			r.Get("/event-calendar", a.handleGetEvents)
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
			r.Post("/member", a.handlePostMember)
			r.Post("/member/image", a.handlePostProfileImage)
		})
		r.Get("/gallery/{category:(all|"+strings.Join(core.CATEGORIES, "|")+")}", a.handleGetEGallerys)
		r.Post("/contact", a.handlePostcontact)
		r.Get("/downloads", a.handleGetDownloads)
		// r.Get("/auth", a.handleVerifyAuth)
	})
	return r
}
