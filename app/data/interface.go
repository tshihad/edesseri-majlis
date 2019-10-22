package data

import (
	"majlis/app/models"
)

// Repo - repository layer. Any database or service (eg: redis )related query
// and task should be implemented here.
type Repo interface {
	UserRepo
}

// UserRepo for user repo
type UserRepo interface {
	GetMember(models.Member) (models.Member, error)
	CreateMember(models.Member) error
}
