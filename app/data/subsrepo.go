package data

import (
	"majlis/app/models"

	"github.com/jinzhu/gorm"
)

// CreateSubscription Create new subscription
func (r *RepoImp) CreateSubscription(subs models.Subscription) (models.Subscription, error) {
	err := r.db.Create(&subs).Error
	return subs, err
}

// GetSubscription returns member subscription
func (r *RepoImp) GetSubscription(memberID string) ([]models.Subscription, error) {
	var subs []models.Subscription
	err := r.db.Where(models.Subscription{MemberID: memberID}).Order("sub_year ASC, sub_month ASC").Find(&subs).Error
	return subs, err
}

// DeleteSubscriton delete subscription
func (r *RepoImp) DeleteSubscriton(id uint) error {
	return r.db.Delete(models.Subscription{
		Model: gorm.Model{ID: id},
	}).Error
}
