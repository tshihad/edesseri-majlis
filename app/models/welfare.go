package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

// Welfare model
type Welfare struct {
	gorm.Model
	MemberID    string
	Currency    string
	WelfareDate time.Time
	Title       string
	Description string
	Amount      int
}
