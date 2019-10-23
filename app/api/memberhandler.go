package api

import (
	"encoding/json"
	"majlis/app/models"
	"net/http"

	"github.com/go-chi/chi"
	"gopkg.in/go-playground/validator.v9"
)

func (a *App) handleGetMember(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, "member_id")
	member := models.Member{MemberID: memberID}
	member, err := a.GetMember(member)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to fetch user", err)
		return
	}
	a.Success(w, http.StatusOK, member)
}

func (a *App) handlePostMember(w http.ResponseWriter, r *http.Request) {
	var member models.Member
	if err := json.NewDecoder(r.Body).Decode(&member); err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	v := validator.New()
	if err := v.Struct(member); err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to validate struct", err)
		return
	}
	err := a.CreateMember(member)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to create user", err)
		return
	}
	w.WriteHeader(http.StatusCreated)
}
func (a *App) handlePutMember(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, "member_id")
	member := models.Member{MemberID: memberID}
	if err := json.NewDecoder(r.Body).Decode(member); err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	member, err := a.UpdateMember(member)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to update user", err)
		return
	}
}
