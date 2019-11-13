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
	location, err := uploadFile(r, core.DOWNLOAD_TAG, core.GALLERY_LOCATION, core.ALLOW_GALLERY_EXT)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "failed to upload photo", err)
		return
	}
	eGallery.PhotoLocaltion = core.GetStaticHost() + location
	d, err := getDimensions(core.STATIC + location)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to get dimension", err)
		return
	}
	eGallery.Height = d.Height
	eGallery.Width = d.Width
	eGallery.Category = chi.URLParam(r, core.CATEGORY_TAG)
	_, err = a.CreateEGallery(eGallery)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "failed to create e gallery", err)
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
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to get gallery items", err)
		return
	}
	a.Success(w, http.StatusOK, galleries)
}

func (a *App) handleDeleteEGallery(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	err := a.DeleteEGallery(id)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "failed to delete gallery", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}
