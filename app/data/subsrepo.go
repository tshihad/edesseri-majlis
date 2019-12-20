package data

import (
	"fmt"
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

func (r *RepoImp) GetSubscriptions(req models.SubsAdminTableReq) ([]models.Subscription, error) {
	var s []models.Subscription
	startDate := req.StartDate.Year()*100 + int(req.StartDate.Month()) - 1
	endDate := req.EndDate.Year()*100 + int(req.EndDate.Month()) - 1
	err := r.db.Model(models.Subscription{}).Where(
		fmt.Sprintf("period > %d AND period < %d", startDate, endDate),
	).Scan(&s).Error
	return s, err
}
