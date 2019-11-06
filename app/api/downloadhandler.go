package api

import (
	"majlis/app/core"
	"majlis/app/models"
	"net/http"
)

func (a *App) handleGetDownloads(w http.ResponseWriter, r *http.Request) {
	d := []models.Downloads{
		{
			Title:       "Marriage certificate",
			Description: "This is a test description which should desplay in form",
			Location:    "http://localhost:8080/static/mg.pdf",
		},
		{
			Title:       "Marriage certificate",
			Description: "This is a test description which should desplay in form",
			Location:    "http://localhost:8080/static/mg.pdf",
		},
		{
			Title:       "Marriage certificate",
			Description: "This is a test description which should desplay in form",
			Location:    "http://localhost:8080/static/mg.pdf",
		},
		{
			Title:       "Marriage certificate",
			Description: "This is a test description which should desplay in form",
			Location:    "http://localhost:8080/static/mg.pdf",
		},
		{
			Title:       "Marriage certificate",
			Description: "This is a test description which should desplay in form",
			Location:    "http://localhost:8080/static/mg.pdf",
		},
		{
			Title:       "Marriage certificate",
			Description: "This is a test description which should desplay in form",
			Location:    "http://localhost:8080/static/mg.pdf",
		},
	}
	a.Success(w, http.StatusOK, d)
}

func (a *App) handlePostDownload(w http.ResponseWriter, r *http.Request) {
	location, err := uploadImage(r, core.DOWNLOAD_TAG, core.DOWNLOAD_LOCATION)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to upload image", err)
		return
	}
	d := models.Downloads{}
	d.Title = r.Form.Get("title")
	d.Description = r.Form.Get("description")
	d.Location = location
	err = a.CreateDownload(d)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to create download entry in db", err)
		return
	}
	a.Success(w, http.StatusCreated, d)
}
