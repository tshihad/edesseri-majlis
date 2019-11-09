package api

import (
	"encoding/json"
	"majlis/app/models"
	"net/http"
	"strconv"

	"github.com/jinzhu/gorm"

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

// TODO update with filtering
func (a *App) handleGetSubscription(w http.ResponseWriter, r *http.Request) {
	memberID := r.Context().Value("member_id").(string)
	subs, err := a.GetSubscription(memberID)
	if err != nil && err != gorm.ErrRecordNotFound {
		a.Fail(w, http.StatusInternalServerError, "Failed to find Subscription", err)
		return
	}
	resp := make(map[int]models.SubsTableResponse)
	for _, s := range subs {
		tr, ok := resp[s.SubYear]
		if !ok {
			tr = models.SubsTableResponse{
				Year: s.SubYear,
			}
		}
		tr.Rows[s.SubMonth].Amount = strconv.Itoa(s.SubAmount)
		resp[s.SubYear] = tr

	}
	a.Success(w, http.StatusOK, resp)
}

func (a *App) handleDeleteSubscription(w http.ResponseWriter, r *http.Request) {
	idParam := chi.URLParam(r, "id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		a.Fail(w, http.StatusBadRequest, "Invalid request", err)
		return
	}
	if err := a.DeleteSubscriton(uint(id)); err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to delete subscription", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}
