package data

import (
	"majlis/app/models"
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
