package models

import "github.com/jinzhu/gorm"

// Contact for contact majlis form
type Contact struct {
	gorm.Model
	Name    string `json:"name"`
	Email   string `json:"email"`
	Content string `json:"content"`
}
