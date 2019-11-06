package models

import "github.com/jinzhu/gorm"

type Downloads struct {
	gorm.Model
	Title       string
	Description string
	IsPublic    bool `json:"-"`
	Location    string
}
