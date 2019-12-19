package data

import (
	"majlis/app/models"
)

func (r *RepoImp) CreateWelfareScheme(ws models.WelfareScheme) error {
	return r.db.Create(&ws).Error
}

func (r *RepoImp) GetWelfareScheme() ([]models.WelfareScheme, error) {
	var ws []models.WelfareScheme
	err := r.db.Model(models.WelfareScheme{}).Scan(&ws).Error
	return ws, err
}

func (r *RepoImp) CreateWelfareCampaign(wc models.WelfareCampaign) error {
	return r.db.Create(&wc).Error
}

func (r *RepoImp) GetWelfareCampaign() ([]models.WelfareCampaign, error) {
	var wc []models.WelfareCampaign
	err := r.db.Model(models.WelfareCampaign{}).Scan(wc).Error
	return wc, err
}
