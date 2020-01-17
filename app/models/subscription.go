package models

import (
	"time"
)

// Subscription model
type Subscription struct {
	ID           int    `gorm:"primary_key"`
	MemberID     string `json:"member_id" gorm:"column:member_id"`
	SubYear      int    `json:"sub_year" gorm:"column:sub_year"`
	SubMonth     int    `json:"sub_month" gorm:"column:sub_month"`
	Period       int    `json:"period" gorm:"column:period"`
	SubAmount    int    `json:"sub_amount" gorm:"column:sub_amount"`
	SubStatus    string `json:"sub_status" gorm:"column:sub_status"`
	PaymentDate  string `json:"payment_date" gorm:"column:payment_date"`
	PaymentEvent string `json:"payment_event" gorm:"column:payment_event"`
	CreatedBy    string `json:"created_by" gorm:"column:created_by"`
	CreatedAt    *time.Time
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
