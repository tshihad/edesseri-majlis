package api

import (
	"net/http"

	"github.com/go-chi/chi"
)

func (a *App) handleGetLoan(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, "member_id")
	loan, err := a.GetLoan(memberID)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to find loan", err)
		return
	}
	a.Success(w, http.StatusOK, loan)
}
