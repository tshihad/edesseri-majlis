package data

import (
	"majlis/app/models"
)

// CreateSubscription Create new subscription
func (r *RepoImp) CreateSubscription(subs models.Subscription) (models.Subscription, error) {
	err := r.db.Create(&subs).Error
	return subs, err
}

// GetSubscription returns member subscription
func (r *RepoImp) GetSubscription(memberID string) (models.Subscription, error) {
	var subs models.Subscription
	subs.MemberID = memberID
	err := r.db.Where(subs).Find(&subs).Error
	return subs, err
}

// DeleteSubscriton delete subscription
func (r *RepoImp) DeleteSubscriton(id int) error {
	return r.db.Delete(models.Subscription{ID: id}).Error
}
