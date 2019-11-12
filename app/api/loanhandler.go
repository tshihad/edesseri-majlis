package api

import (
	"encoding/json"
	"errors"
	"majlis/app/core"
	"majlis/app/models"
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

func (a *App) handlePostLoan(w http.ResponseWriter, r *http.Request) {
	memberID := r.Context().Value(core.MEMBERID_TAG).(string)
	var loan models.Loan
	if err := json.NewDecoder(r.Body).Decode(&loan); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to parse request", err)
		return
	}
	if memberID == loan.GuarenterMemberID {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Guarenteer memberID cannot be same as user member id", errors.New("MemeberID conflict"))
		return
	}
	loan.MemberID = memberID
	err := a.CreateLoan(loan)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to insert data", err)
		return
	}
	w.WriteHeader(http.StatusCreated)
}
