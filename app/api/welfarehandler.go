package api

import (
	"encoding/json"
	"majlis/app/models"
	"net/http"
)

func (a *App) handlePostWelfareScheme(w http.ResponseWriter, r *http.Request) {
	var ws models.WelfareScheme
	if err := json.NewDecoder(r.Body).Decode(&ws); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to parse", err)
		return
	}
	if err := a.CreateWelfareScheme(ws); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to create", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func (a *App) handleGetWelfareScheme(w http.ResponseWriter, r *http.Request) {
	ws, err := a.GetWelfareScheme()
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to fetch", err)
		return
	}
	a.Success(w, http.StatusOK, ws)
}

func (a *App) handleGetWelfareCampaign(w http.ResponseWriter, r *http.Request) {
	wc, err := a.GetWelfareCampaign()
	if err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to fetch", err)
		return
	}
	a.Success(w, http.StatusOK, wc)
}

func (a *App) handlePostWelfareCampaign(w http.ResponseWriter, r *http.Request) {
	var wc models.WelfareCampaign
	if err := json.NewDecoder(r.Body).Decode(&wc); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to parse", err)
		return
	}
	if err := a.CreateWelfareCampaign(wc); err != nil {
		a.Fail(w, http.StatusNonAuthoritativeInfo, "Failed to create", err)
		return
	}
	w.WriteHeader(http.StatusOK)
}
