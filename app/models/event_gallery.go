package models

// EventGallery model
type EventGallery struct {
	ID             int `gorm:"primary_key"`
	PhotoLocaltion string
	Category       string
	Height         int
	Width          int
}

// Dimension for image dimension
type Dimension struct {
	Height int
	Width  int
}

type ECategoryReq struct {
	Name string `json:"name"`
}
