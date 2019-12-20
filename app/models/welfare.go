package models

// Welfare model
type WelfareScheme struct {
	ID          int    `gorm:"primary_key"`
	Code        string `json:"code"`
	Description string `json:"description"`
	Nature      string `json:"nature"`
	Welfaretype string `json:"type" gorm:"column:type"`
	Mode        string `json:"mode"`
	Status      string `json:"status"`
}

type WelfareCampaign struct {
	ID           int    `gorm:"primary_key"`
	CampaignCode string `json:"campaign_code"`
	WelfareCode  string `json:"welfare_code"`
	FiscalPeriod string `json:"fiscal_period"`
	Startate     string `json:"start_date"`
	EndDate      string `json:"end_date"`
	State        string `json:"status"`
	CampaignNote string `json:"campaign_note"`
}

type WelfareCollection struct {
	ID       int    `gorm:"primary_key"`
	MemberID string `json:"member_id" gorm:"column:member_id"`
	Amount   int    `json:"amount"`
}
