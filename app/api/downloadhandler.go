package api

import (
	"majlis/app/core"
	"majlis/app/models"
	"net/http"
	"os"
	"strconv"
	"strings"
)

func (a *App) handleGetPublicDownloads(w http.ResponseWriter, r *http.Request) {
	d, err := a.GetDownloads(true)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to get downloads", err)
		return
	}
	a.Success(w, http.StatusOK, d)
}

func (a *App) handlePostDownload(w http.ResponseWriter, r *http.Request) {

	location, err := uploadFile(r, core.DOWNLOAD_TAG, core.PRIVATE_DOWNLOAD_LOCATION)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to upload image", err)
		return
	}

	isPublic := r.Form.Get("is_public")
	p, err := strconv.ParseBool(isPublic)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to parse is_public", err)
		return
	}

	d := models.Downloads{}
	d.Title = r.Form.Get("title")
	d.Description = r.Form.Get("description")
	d.IsPublic = p
	d.Location = core.GetStaticHost() + location
	if p {
		s := strings.Split(location, "/")
		newLocation := core.PUBLIC_DOWNLOAD_LOCATION + "/" + s[len(s)-1]
		err := os.Rename(core.STATIC+location, core.STATIC+newLocation)
		if err != nil {
			a.Fail(w, http.StatusInternalServerError, "Failed to move file", err)
			return
		}
		d.Location = core.GetStaticHost() + newLocation
	}

	err = a.CreateDownload(d)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to create download entry in db", err)
		return
	}

	a.Success(w, http.StatusCreated, d)
}
