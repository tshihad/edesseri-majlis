package api

import (
	"encoding/json"
	"majlis/app/models"
	"net/http"
)

func (a *App) handlePostcontact(w http.ResponseWriter, r *http.Request) {
	var contact models.Contact
	if err := json.NewDecoder(r.Body).Decode(&contact); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to parse contact form", err)
		return
	}
	if err := a.CreateContact(contact); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to insert contact to db", err)
		return
	}
	w.WriteHeader(http.StatusCreated)
}

func (a *App) handleGetContact(w http.ResponseWriter, r *http.Request) {
	c, err := a.GetContact()
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to get contact", err)
		return
	}
	a.Success(w, http.StatusOK, c)
}
