package api

import (
	"net/http"

	"github.com/go-chi/chi"
)

func (a *App) serveFile(rt chi.Router) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		// file := chi.URLParam(r, "file")
		file := "upload/gallery/"
		url := r.URL.String()
		fs := http.StripPrefix(url, http.FileServer(http.Dir(file)))
		rt.Get(url, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			fs.ServeHTTP(w, r)
		}))
	}
}
