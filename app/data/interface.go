package data

import (
	"majlis/app/models"
)

// Repo - repository layer. Any database or service (eg: redis )related query
// and task should be implemented here.
type Repo interface {
	MemberRepo
}

// MemberRepo for user repo
type MemberRepo interface {
	GetMember(models.Member) (models.Member, error)
	CreateMember(models.Member) error
	UpdateMember(string, models.Member) (models.Member, error)
	DeleteMember(string) error
	CreateNewMemberID() (string, error)
}
