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
	ContactRepo
	DownloadRepo
	Cache
	CalendarRepo
	WelfareRepo
	AdminRepo
}

// MemberRepo for user repo
type MemberRepo interface {
	GetMember(string, string) (models.Member, error)
	CreateMember(models.Member) error
	UpdateMember(string, models.Member) (models.Member, error)
	DeleteMember(string) error
	CreateNewMemberID() (string, error)
	GetMembers() ([]models.MemberShortResp, error)
	GetSearchMember(data string) ([]models.MemberShortResp, error)
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
	GetSubscription(memberID string) ([]models.Subscription, error)
	DeleteSubscriton(id int) error
	GetSubscriptions() ([]models.Subscription, error)
}

// LoanRepo for loans
type LoanRepo interface {
	GetLoan(string) ([]models.Loan, error)
	GetLoans() ([]models.Loan, error)
	CreateLoan(models.Loan) error
}

// ContactRepo for contact informations
type ContactRepo interface {
	CreateContact(models.Contact) error
	GetContact() ([]models.Contact, error)
}

// DownloadRepo for downloadn repo
type DownloadRepo interface {
	CreateDownload(models.Downloads) error
	GetDownloads(bool) ([]models.Downloads, error)
}

// Cache wraps redis functions
type Cache interface {
	VerifyToken(string) (string, error)
	CreateToken(string) (string, error)
}

// CalendarRepo event calendar
type CalendarRepo interface {
	GetCalendarEvents() ([]models.EventCalendar, error)
	GetUpcomingEvents(int) ([]models.EventCalendar, error)
	DeleteEvent(string) error
	CreateEvent(models.EventCalendar) error
}

// WelfareRepo wraps welfare functions
type WelfareRepo interface {
	CreateWelfareScheme(models.WelfareScheme) error
	GetWelfareScheme() ([]models.WelfareScheme, error)
	CreateWelfareCampaign(models.WelfareCampaign) error
	GetWelfareCampaign() ([]models.WelfareCampaign, error)
}

type AdminRepo interface {
	VerifyAdmin(string) error
	UpdateAdmin(models.Admin) (string, error)
}
