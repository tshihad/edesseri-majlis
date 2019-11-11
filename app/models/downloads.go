package models

import "github.com/jinzhu/gorm"

// Downloads form
type Downloads struct {
	gorm.Model
	Title       string
	Description string
	IsPublic    bool
	Location    string
}
