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
	err := r.db.Model(models.WelfareCampaign{}).Scan(&wc).Error
	return wc, err
}

func (r *RepoImp) CreateWelfareCollection(wc models.WelfareCollection) error {
	return r.db.Create(&wc).Error
}

func (r *RepoImp) GetWelfareCollection() ([]models.WelfareCollectionResp, error) {
	var wc []models.WelfareCollectionResp
	qry := `
	select welfare_scheme.code,welfare_scheme.description,welfare_collection.campaign_code,welfare_collection.member_id,welfare_collection.amount 
	from welfare_collection join welfare_campaign
	on welfare_collection.campaign_code=welfare_campaign.campaign_code join welfare_scheme on welfare_campaign.welfare_code=welfare_scheme.code ;
	`
	err := r.db.Raw(qry).Scan(&wc).Error
	return wc, err
}
