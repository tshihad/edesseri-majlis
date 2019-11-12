package api

import (
	"net/http"
)

func (a *App) handleVerifyAuth(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	m, err := a.VerifyToken(token)
	if err != nil || m == "" {
		a.Error("Fail to verify auth")
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	a.Success(w, http.StatusOK, m)
}
