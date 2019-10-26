package api

import (
	"encoding/json"
	"majlis/app/models"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"
)

func (a *App) handlePostSubscription(w http.ResponseWriter, r *http.Request) {
	var subs models.Subscription
	if err := json.NewDecoder(r.Body).Decode(&subs); err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	subs, err := a.CreateSubscription(subs)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to create subscription", err)
		return
	}
	a.Success(w, http.StatusCreated, subs)
}

func (a *App) handleGetSubscription(w http.ResponseWriter, r *http.Request) {
	memberID := chi.URLParam(r, "member_id")
	subs, err := a.GetSubscription(memberID)
	if err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to find Subscription", err)
		return
	}
	a.Success(w, http.StatusOK, subs)
}

func (a *App) handleDeleteSubscription(w http.ResponseWriter, r *http.Request) {
	idParam := chi.URLParam(r, "id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	if err := a.DeleteSubscriton(id); err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to delete subscription", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}
