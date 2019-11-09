package models

import (
	"time"
)

// EventCalendar model
type EventCalendar struct {
	ID          int `gorm:"primary_key"`
	Title       string
	Description string
	EventDate   time.Time
}
