package data

import (
	"majlis/app/models"
)

// CreateContact create contact
func (r *RepoImp) CreateContact(c models.Contact) error {
	return r.db.Create(&c).Error
}
