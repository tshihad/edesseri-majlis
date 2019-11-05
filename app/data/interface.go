package data

import (
	"majlis/app/models"
)

// Repo - repository layer. Any database or service (eg: redis )related query
// and task should be implemented here.
type Repo interface {
	MemberRepo
	SubscriptionRepo
	LoanRepo
	EgallerRepo
}

// MemberRepo for user repo
type MemberRepo interface {
	GetMember(models.Member) (models.Member, error)
	CreateMember(models.Member) error
	UpdateMember(string, models.Member) (models.Member, error)
	DeleteMember(string) error
	CreateNewMemberID() (string, error)
	GetMembers(int, int) ([]models.Member, error)
}

// EgallerRepo for egallery functions
type EgallerRepo interface {
	CreateEGallery(models.EventGallery) (int, error)
	GetEGallerys(category string) ([]models.EventGallery, error)
	DeleteEGallery(id int) error
}

// SubscriptionRepo wrapper subscriptions
type SubscriptionRepo interface {
	CreateSubscription(models.Subscription) (models.Subscription, error)
	GetSubscription(memberID string) (models.Subscription, error)
	DeleteSubscriton(id int) error
}

// LoanRepo for loans
type LoanRepo interface {
	GetLoan(string) ([]models.Loan, error)
}
