package models

import "github.com/jinzhu/gorm"

// Contact for contact majlis form
type Contact struct {
	gorm.Model
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Phone     string `json:"phone"`
	Country   string `json:"country"`
	Place     string `json:"place"`
	Content   string `json:"content"`
}
