package models

import (
	"time"
)

// Subscription model
type Subscription struct {
	ID           int `gorm:"primary_key"`
	MemberID     string
	SubYear      int
	SubMonth     int
	Period       int
	SubAmount    int
	SubStatus    string
	PaymentDate  string
	PaymentEvent string
	CreatedBy    string
	UpdatedAt    time.Time
	DeletedAt    time.Time
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
