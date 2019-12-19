package data

import (
	"majlis/app/models"
)

// CreateSubscription Create new subscription
func (r *RepoImp) CreateSubscription(subs models.Subscription) (models.Subscription, error) {
	subs.Period = subs.SubYear*100 + subs.SubMonth
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
func (r *RepoImp) DeleteSubscriton(id int) error {
	return r.db.Delete(models.Subscription{
		ID: id,
	}).Error
}

func (r *RepoImp) GetSubscriptions() ([]models.Subscription, error) {
	var s []models.Subscription
	err := r.db.Model(models.Subscription{}).Scan(&s).Error
	return s, err
}
