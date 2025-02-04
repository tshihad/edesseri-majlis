package api

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"majlis/app/core"
	"majlis/app/models"
	"net/http"

	"github.com/jinzhu/gorm"

	"github.com/go-chi/chi"
)

// retrieve member handler
func (a *App) handleGetMember(w http.ResponseWriter, r *http.Request) {
	memberID := r.Context().Value(core.MEMBERID_TAG).(string)
	member, err := a.GetMember(memberID, "")
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to fetch user", err)
		return
	}
	a.Success(w, http.StatusOK, member)
}

func (a *App) handlePostProfileImage(w http.ResponseWriter, r *http.Request) {
	location, err := uploadFile(r, "profileImage", core.PROFILE_LOCATION, core.ALLOW_GALLERY_EXT)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to upload image", err)
		return
	}
	imLocation := models.Profile{
		ImageLocation: core.GetStaticHost() + location,
	}
	a.Success(w, http.StatusCreated, imLocation)
}

// create new member handler
func (a *App) handlePostMember(w http.ResponseWriter, r *http.Request) {
	var member models.Member
	if err := json.NewDecoder(r.Body).Decode(&member); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to parse", err)
		return
	}
	memberID, err := a.CreateNewMemberID()
	member.MemberID = memberID
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "failed to create member id", err)
		return
	}
	m := md5.New()
	m.Write([]byte(member.PasswordHash))
	member.PasswordHash = hex.EncodeToString(m.Sum(nil))
	err = a.CreateMember(member)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to create user, "+err.Error(), err)
		return
	}
	a.Success(w, http.StatusCreated, memberID)
}

// update member handler
func (a *App) handlePutMember(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, core.MEMBERID_TAG)
	var member models.Member
	if err := json.NewDecoder(r.Body).Decode(&member); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Invalid request", err)
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
	members, err := a.GetMembers()
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to get members", err)
		return
	}
	a.Success(w, http.StatusOK, members)
}

func (a *App) handleSignin(w http.ResponseWriter, r *http.Request) {
	var signin models.MemberSignIn
	resp := models.MemberSignInRes{}
	if err := json.NewDecoder(r.Body).Decode(&signin); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to parse sign in form", err)
		return
	}
	member, err := a.GetMember(signin.MemberID, "ACTIVE")
	if err != nil || member.MemberID == "" {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to authenticate", err)
		return
	}
	m := md5.New()
	m.Write([]byte(signin.Password))
	if hex.EncodeToString(m.Sum(nil)) != member.PasswordHash {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to authenticate", err)
		return
	}
	token, err := a.CreateToken(member.MemberID)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to generate token", err)
		return
	}
	resp.MemberID = member.MemberID
	resp.ImageURL = member.ImageLocation
	resp.Name = member.Name
	resp.Token = token
	resp.Email = member.Email
	resp.PhoneNumber = member.PhNumber1

	a.Success(w, http.StatusOK, resp)
}

func (a *App) handleGetSearchMember(w http.ResponseWriter, r *http.Request) {
	data := chi.URLParam(r, "data")
	m, err := a.GetSearchMember(data)
	if err != nil && err != gorm.ErrRecordNotFound {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to search", err)
		return
	}
	a.Success(w, http.StatusOK, m)
}

func (a *App) handleGetMemberID(w http.ResponseWriter, r *http.Request) {
	a.Success(w, http.StatusOK, "E9999")
}
