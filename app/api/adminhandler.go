package api

import (
	"encoding/json"
	"majlis/app/models"
	"net/http"
)

func (a *App) handleAdminSignIn(w http.ResponseWriter, r *http.Request) {
	var admin models.Admin
	if err := json.NewDecoder(r.Body).Decode(&admin); err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to parse request", err)
		return
	}

	err := a.UpdateAdmin(admin)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to update admin", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}
