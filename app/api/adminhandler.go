package api

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"majlis/app/models"
	"net/http"
)

func (a *App) handleAdminSignIn(w http.ResponseWriter, r *http.Request) {
	var adminReq models.AdminRequest
	if err := json.NewDecoder(r.Body).Decode(&adminReq); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to parse request", err)
		return
	}

	m := md5.New()
	m.Write([]byte(adminReq.Password))

	admin := models.Admin{
		Name:         adminReq.Name,
		PasswordHash: hex.EncodeToString(m.Sum(nil)),
	}
	token, err := a.UpdateAdmin(admin)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to update admin", err)
		return
	}
	a.Success(w, http.StatusOK, token)
}

func (a *App) handleVerifyAdminAuth(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	if token == "" {
		w.WriteHeader(http.StatusNonAuthoritativeInfo)
		return
	}
	err := a.VerifyAdmin(token)
	if err != nil {
		w.WriteHeader(http.StatusNonAuthoritativeInfo)
		return
	}
	w.WriteHeader(http.StatusOK)
}
