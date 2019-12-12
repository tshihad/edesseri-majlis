package models

// EventCalendar model
type EventCalendar struct {
	ID          int `gorm:"primary_key"`
	Title       string
	Description string
	EventDate   string `json:"event_date"`
}
