package api

import (
	"net/http"

	"github.com/go-chi/chi"
)

func (a *App) handleGetUser(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, "member_id")
	member, err := a.GetUser(memberID)
	if err != nil {
		a.Error(err, "Failed to fetch user")
		a.Fail(w, http.StatusInternalServerError, "Failed to fetch user")
		return
	}
	a.Success(w, http.StatusOK, member)
}
