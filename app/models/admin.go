package models

type Admin struct {
	Name     string
	Password string
	Token    string `json:"-"`
}
