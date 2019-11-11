package api

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"majlis/app/core"
	"majlis/app/models"
	"net/http"

	"github.com/go-chi/chi"
)

// retrieve member handler
func (a *App) handleGetMember(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, core.MEMBERID_TAG)
	member, err := a.GetMember(memberID)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to fetch user", err)
		return
	}
	a.Success(w, http.StatusOK, member)
}

func (a *App) handlePostProfileImage(w http.ResponseWriter, r *http.Request) {
	location, err := uploadFile(r, "profileImage", core.PROFILE_LOCATION, core.ALLOW_GALLERY_EXT)
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
	if err := json.NewDecoder(r.Body).Decode(&member); err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	memberID, err := a.CreateNewMemberID()
	member.MemberID = memberID
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "failed to create member id", err)
		return
	}
	m := md5.New()
	m.Write([]byte(member.Password))
	member.PasswordHash = hex.EncodeToString(m.Sum(nil))
	err = a.CreateMember(member)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to create user", err)
		return
	}
	a.Success(w, http.StatusCreated, member)
}

// update member handler
func (a *App) handlePutMember(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, core.MEMBERID_TAG)
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
	memberID := chi.URLParam(r, core.MEMBERID_TAG)
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

func (a *App) handleSignin(w http.ResponseWriter, r *http.Request) {
	var signin models.MemberSignIn
	if err := json.NewDecoder(r.Body).Decode(&signin); err != nil {
		a.Fail(w, http.StatusBadRequest, "Failed to parse sign in form", err)
		return
	}
	member, err := a.GetMember(signin.MemberID)
	if err != nil || member.MemberID == "" || member.PasswordHash == "" {
		a.Fail(w, http.StatusNotFound, "Failed to authenticate", err)
		return
	}
	m := md5.New()
	m.Write([]byte(signin.Password))
	if hex.EncodeToString(m.Sum(nil)) != member.PasswordHash {
		a.Fail(w, http.StatusUnauthorized, "Failed to authenticate", err)
		return
	}
	token, err := a.CreateToken(member.MemberID)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to generate token", err)
		return
	}
	a.Success(w, http.StatusOK, token)
}
