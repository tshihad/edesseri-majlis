package api

import (
	"encoding/json"
	"majlis/app/core"
	"majlis/app/models"
	"net/http"

	"github.com/jinzhu/gorm"
)

func (a *App) handleGetWelfare(w http.ResponseWriter, r *http.Request) {
	memberID := r.Context().Value(core.MEMBERID_TAG).(string)
	welfares, err := a.GetWelfare(memberID)
	if err != nil && err != gorm.ErrRecordNotFound {
		a.Fail(w, http.StatusInternalServerError, "Failed to get welfare", err)
		return
	}
	a.Success(w, http.StatusOK, welfares)
}

func (a *App) handlePostWelfare(w http.ResponseWriter, r *http.Request) {
	memberID := r.Context().Value(core.MEMBERID_TAG).(string)
	var welfare models.Welfare
	if err := json.NewDecoder(r.Body).Decode(&welfare); err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to parse request", err)
		return
	}
	welfare.MemberID = memberID
	err := a.CreateWelfare(welfare)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to create welfare record", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}
