package data

import (
	"majlis/app/models"
)

// CreateContact create contact
func (r *RepoImp) CreateContact(c models.Contact) error {
	return r.db.Create(&c).Error
}

// GetContact get contact majlis
func (r *RepoImp) GetContact() ([]models.Contact, error) {
	var c []models.Contact
	err := r.db.Model(&models.Contact{}).Scan(&c).Error
	return c, err
}
