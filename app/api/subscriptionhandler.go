package api

import (
	"encoding/json"
	"majlis/app/core"
	"majlis/app/models"
	"net/http"
	"strconv"
	"time"

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
	subsMap := fillJunkValue()
	for _, s := range subs {
		year := strconv.Itoa(s.SubYear)
		if _, ok := subsMap[year]; ok {
			subsMap[year] = [12]string{}
		}
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
	if err := a.DeleteSubscriton(uint(id)); err != nil {
		a.Fail(w, http.StatusInternalServerError, "Failed to delete subscription", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func fillJunkValue() map[string][core.MONTHS]string {
	lyear := time.Now().Year()
	m := make(map[string][core.MONTHS]string)
	fyear := lyear - core.SUBS_YEAR_SHOW + 1
	for i := 0; i <= fyear; i++ {
		m[strconv.Itoa(i)] = [core.MONTHS]string{"-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"}
	}
	return m
}
