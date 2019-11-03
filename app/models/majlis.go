package models

// Majlis model
type Majlis struct {
	ID       int `gorm:"primary_key"`
	FName    string
	LastName string
	Phone    string `validate:"number"`
	Email    string `validate:"email"`
	Place    string
	Country  string
	Details  string
}
