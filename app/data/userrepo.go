package data

import (
	"majlis/app/models"
)

// GetUser get user from db
func (r *RepoImp) GetUser(memberID string) (models.Member, error) {
	member := models.Member{MemberID: memberID}
	err := r.db.Where(member).First(&member).Error
	return member, err
}
