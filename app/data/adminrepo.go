package data

import (
	"errors"
	"majlis/app/models"
)

// VerifyAdmin verify
func (r *RepoImp) VerifyAdmin(token string) error {
	admin := models.Admin{
		Token: token,
	}
	err := r.db.Model(admin).Where(admin).Scan(&admin).Error
	if admin.Name == "" {
		return errors.New("Failed to authenticate admin")
	}
	return err
}

func (r *RepoImp) UpdateAdmin(a models.Admin) error {
	token := generateToken(a.Name)
	err := r.db.Model(a).Update("token", token).Error
	return err
}
