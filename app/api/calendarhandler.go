package api

import (
	"majlis/app/core"
	"net/http"
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
