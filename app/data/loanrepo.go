package data

import (
	"majlis/app/models"
)

// GetLoan get loan
func (r *RepoImp) GetLoan(memberID string) ([]models.Loan, error) {
	var loan []models.Loan
	err := r.db.Select(models.Loan{MemberID: memberID}).Find(&loan).Error
	return loan, err
}

// CreateLoan loan
func (r *RepoImp) CreateLoan(loan models.Loan) error {
	return r.db.Create(&loan).Error
}
