package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

// Subscription model
type Subscription struct {
	gorm.Model
	MemberID     string
	SubYear      int
	SubMonth     int
	Period       int
	SubAmount    int
	SubStatus    int
	PaymentDate  time.Time
	PaymentEvent string
	CreatedBy    string
}

// SubsTableResponse for formatted subscription data for subscription table
type SubsTableResponse struct {
	Year int
	Rows [12]SubsTableRow
}

// SubsTableRow in SubsTableResponse
type SubsTableRow struct {
	Amount string
}

type SubsAdminTableReq struct {
	StartDate time.Time `json:start_date`
	EndDate   time.Time `json:end_date`
}
