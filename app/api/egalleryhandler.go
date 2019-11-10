package api

import (
	"majlis/app/core"
	"majlis/app/models"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"
)

func (a *App) handlePostEGallery(w http.ResponseWriter, r *http.Request) {
	eGallery := models.EventGallery{}
	err := r.ParseForm()
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to parse form", err)
		return
	}

	location, err := uploadFile(r, core.DOWNLOAD_TAG, core.GALLERY_LOCATION, core.ALLOW_GALLERY_EXT)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "failed to upload photo", err)
		return
	}
	eGallery.PhotoLocaltion = core.GetStaticHost() + location
	category := r.FormValue(core.CATEGORY_TAG)
	if !contains(category, core.CATEGORIES) {
		a.Fail(w, http.StatusBadRequest, "invalid category", nil)
		return
	}

	eGallery.Category = category
	_, err = a.CreateEGallery(eGallery)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "failed to create e gallery", err)
		return
	}
	w.WriteHeader(http.StatusCreated)
}

// retrieve egallery items filtered by category. if category is all
// every data is retrieved.
func (a *App) handleGetEGallerys(w http.ResponseWriter, r *http.Request) {
	category := chi.URLParam(r, "category")
	if category == "all" {
		category = ""
	}
	galleries, err := a.GetEGallerys(category)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to get gallery items", err)
		return
	}
	a.Success(w, http.StatusOK, galleries)
}

func (a *App) handleDeleteEGallery(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	err := a.DeleteEGallery(id)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "failed to delete gallery", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}
