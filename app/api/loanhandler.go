package api

import (
	"majlis/app/core"
	"net/http"
)

func (a *App) handleGetLoan(w http.ResponseWriter, r *http.Request) {
	memberID := r.Context().Value(core.MEMBERID_TAG).(string)
	loan, err := a.GetLoan(memberID)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to find loan", err)
		return
	}
	a.Success(w, http.StatusOK, loan)
}
