package models

import (
	"time"
)

// Subscription model
type Subscription struct {
	ID       int `gorm:"primary_key"`
	MemberID string
	Fee      int
	Status   int
	PaidAt   *time.Time
}
