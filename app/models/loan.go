package models

import (
	"time"
)

// Loan model
type Loan struct {
	ID                int       `json:"id,omit_empty" gorm:"primary_key"`
	MemberID          string    `json:"member_id" gorm:"column:member_id"`
	RequestAmount     int       `json:"request_amount" gorm:"column:request_amount"`
	Installment       int       `json:"installment" gorm:"column:installment"`
	Purpose           string    `json:"purpose" gorm:"column:purpose"`
	RequsetDate       time.Time `json:"request_date" gorm:"column:requset_date"`
	GuarenterMemberID string    `json:"g_member_id" gorm:"column:g_member_id"`
	Status            string    `json:"status" gorm:"column:status"`
	Reason            string    `json:"reason" gorm:"column:reason"`
	OfficeDate        time.Time `json:"office_date" gorm:"column:office_date"`
	Notes             string    `json:"notes" gorm:"column:notes"`
}
