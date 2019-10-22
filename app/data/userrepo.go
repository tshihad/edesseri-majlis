package data

import (
	"majlis/app/models"
)

// GetMember get user from db
func (r *RepoImp) GetMember(member models.Member) (models.Member, error) {
	err := r.db.Where(member).First(&member).Error
	return member, err
}

// CreateMember insert new member to db
func (r *RepoImp) CreateMember(member models.Member) error {
	err := r.db.Create(member).Error
	return err
}
