package data

import (
	"majlis/app/models"
)

// CreateWelfare create welfare details of members
func (r *RepoImp) CreateWelfare(welfare models.Welfare) error {
	return r.db.Create(&welfare).Error
}

// GetWelfare will retrieve all welfare assosiate with a user
func (r *RepoImp) GetWelfare(memberID string) ([]models.Welfare, error) {
	var welfares []models.Welfare
	err := r.db.Model(models.Welfare{}).Where(models.Welfare{MemberID: memberID}).Order("created_at DESC").Scan(&welfares).Error
	return welfares, err
}
