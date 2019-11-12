package api

import (
	"majlis/app/core"
	"net/http"
	"strings"

	"github.com/go-chi/chi"
)

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
		r.Get("/event-calendar", a.handleGetEvents)

		r.With(a.validateUser()).Route("/member", func(r chi.Router) {
			r.Get("/", a.handleGetMember)
			r.Put("/", a.handlePutMember)
			r.Delete("/", a.handleDeleteMember)
			r.Get("/subscription", a.handleGetSubscription)
			r.Get("/family-welfare", a.handleGetWelfare)
			r.Post("/loan", a.handlePostLoan)

			r.Get("/downloads", a.handleGetPrivateDownloads)
		})
		r.With(a.validateAdmin()).Route("/admin", func(r chi.Router) {
			r.Route("/event-gallery", func(r chi.Router) {
				r.Post("/", a.handlePostEGallery)
				r.Delete("/{id}", a.handleDeleteEGallery)
			})
			r.Route("/subscription", func(r chi.Router) {
				r.Post("/", a.handlePostSubscription)
				r.Get("/", a.handleGetSubscription)
				r.Delete("/{id}", a.handleDeleteSubscription)
			})

			r.Get("/member", a.handleGetMembers)
			r.Post("/member", a.handlePostMember)
			r.Post("/member/image", a.handlePostProfileImage)

			r.Post("/downloads", a.handlePostDownload)
		})

		r.Get("/event-gallery/{category:(all|"+strings.Join(core.CATEGORIES, "|")+")}", a.handleGetEGallerys)
		r.Post("/contact", a.handlePostcontact)

		r.Get("/downloads", a.handleGetPublicDownloads)
		r.Get("/auth", a.handleVerifyAuth)
		r.Post("/signin/admin", a.handleAdminSignIn)
	})
	return r
}
