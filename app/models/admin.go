package models

type Admin struct {
	Name         string
	PasswordHash string `gorm:column:"password_hash"`
	Token        string
}

type AdminRequest struct {
	Name     string
	Password string
}
