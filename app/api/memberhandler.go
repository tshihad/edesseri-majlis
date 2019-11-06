package api

import (
	"encoding/json"
	"majlis/app/core"
	"majlis/app/models"
	"net/http"

	"github.com/go-chi/chi"
	"gopkg.in/go-playground/validator.v9"
)

// retrieve member handler
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

func (a *App) handlePostProfileImage(w http.ResponseWriter, r *http.Request) {
	location, err := uploadImage(r, "profileImage", core.PROFILE_LOCATION)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to upload image", err)
		return
	}
	imLocation := models.Profile{
		ImageLocation: location,
	}
	a.Success(w, http.StatusCreated, imLocation)
}

// create new member handler
func (a *App) handlePostMember(w http.ResponseWriter, r *http.Request) {
	var member models.Member
	location, err := uploadImage(r, "profileImage", core.PROFILE_LOCATION)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to upload image", err)
		return
	}
	if err := json.NewDecoder(r.Body).Decode(&member); err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	v := validator.New()
	if err := v.Struct(member); err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to validate struct", err)
		return
	}
	memberID, err := a.CreateNewMemberID()
	member.MemberID = memberID
	member.ImageLocation = location
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "failed to create member id", err)
		return
	}
	err = a.CreateMember(member)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to create user", err)
		return
	}
	a.Success(w, http.StatusCreated, member)
}

// update member handler
func (a *App) handlePutMember(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, "member_id")
	var member models.Member
	if err := json.NewDecoder(r.Body).Decode(&member); err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	member.MemberID = memberID
	member, err := a.UpdateMember(memberID, member)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to update user", err)
		return
	}
	a.Success(w, http.StatusOK, member)
}

// Delete member handler
func (a *App) handleDeleteMember(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, "member_id")
	err := a.DeleteMember(memberID)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to update user", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func (a *App) handleGetMembers(w http.ResponseWriter, r *http.Request) {
	limit, offset, err := getParams(r)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid limit/offset", err)
		return
	}
	members, err := a.GetMembers(limit, offset)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to get members", err)
		return
	}
	a.Success(w, http.StatusOK, members)
}
