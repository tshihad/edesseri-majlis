package data

import (
	"errors"
	"fmt"
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

func (r *RepoImp) UpdateAdmin(a models.Admin) (string, error) {
	token := generateToken(a.Name)
	err := r.db.Where(a).Find(&a).Error
	if err != nil {
		return "", err
	}
	err = r.db.Model(&a).Where(fmt.Sprintf("name='%s' AND password_hash='%s'", a.Name, a.PasswordHash)).Update("token", token).Error
	return token, err
}
