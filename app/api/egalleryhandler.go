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
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	eGallery.Category = r.FormValue("category")
	flag := false
	for _, val := range core.CATEGORIES {
		if eGallery.Category == val {
			flag = true
		}
	}
	if !flag {
		a.Fail(w, http.StatusBadRequest, "invalid category", nil)
		return
	}
	eGallery.PhotoLocaltion, err = uploadImage(r, "image", core.GALLERY_LOCATION)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "failed to upload photo", err)
		return
	}
	id, err := a.CreateEGallery(eGallery)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "failed to create e gallery", err)
		return
	}
	eGallery.ID = id
	a.Success(w, http.StatusCreated, eGallery)
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
