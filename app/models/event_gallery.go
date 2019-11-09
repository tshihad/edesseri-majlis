package models

// EventGallery model
type EventGallery struct {
	ID             int `gorm:"primary_key"`
	PhotoLocaltion string
	Category       string
}
