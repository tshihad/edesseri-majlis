package api

import (
	"encoding/json"
	"majlis/app/core"
	"majlis/app/models"
	"net/http"

	"github.com/go-chi/chi"
)

func (a *App) handleGetEvents(w http.ResponseWriter, r *http.Request) {
	ce, err := a.GetCalendarEvents()
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to fetch calendar events", err)
		return
	}
	a.Success(w, http.StatusOK, ce)
}

func (a *App) handleGetUpcomingEvents(w http.ResponseWriter, r *http.Request) {
	events, err := a.GetUpcomingEvents(core.UPCOMING_EVENT_COUNT)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to get upcoming events", err)
		return
	}
	a.Success(w, http.StatusOK, events)
}

func (a *App) handleDeleteEvents(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	err := a.DeleteEvent(id)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to delete", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func (a *App) handlePostEvent(w http.ResponseWriter, r *http.Request) {
	var e models.EventCalendar
	var err error
	if err := json.NewDecoder(r.Body).Decode(&e); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to parse", err)
		return
	}
	err = a.CreateEvent(e)
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to create", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}
