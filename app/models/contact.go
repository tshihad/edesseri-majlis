package models

import "github.com/jinzhu/gorm"

// Contact for contact majlis form
type Contact struct {
	gorm.Model
	Name    string `json:"name"`
	Email   string `json:"email"`
	Phone   string `json:"phone"`
	Country string `json:"country"`
	Place   string `json:"place"`
	Content string `json:"content"`
}
