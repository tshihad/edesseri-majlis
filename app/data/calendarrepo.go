package data

import (
	"majlis/app/models"
	"strconv"
)

// GetCalendarEvents returns all events per descending order
func (r *RepoImp) GetCalendarEvents() ([]models.EventCalendar, error) {
	var ec []models.EventCalendar
	err := r.db.Model(models.EventCalendar{}).Order("event_date DESC").Scan(&ec).Error
	return ec, err
}

// GetUpcomingEvents retuns limit number of upcoming events
func (r *RepoImp) GetUpcomingEvents(limit int) ([]models.EventCalendar, error) {
	var event []models.EventCalendar
	err := r.db.Model(models.EventCalendar{}).Where("event_date > now()").Order("event_date ASC").Limit(limit).Scan(&event).Error
	return event, err
}

// DeleteEvent delete event
func (r *RepoImp) DeleteEvent(i string) error {
	id, err := strconv.Atoi(i)
	if err != nil {
		return err
	}
	return r.db.Model(models.EventCalendar{}).Delete(models.EventCalendar{ID: id}).Error
}

// CreateEvent create events
func (r *RepoImp) CreateEvent(c models.EventCalendar) error {
	return r.db.Model(c).Create(&c).Error
}
