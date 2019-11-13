package models

import (
	"time"
)

// Member model
type Member struct {
	MemberID                    string    `json:"-" gorm:"primary_key"`
	Name                        string    `json:"name" gorm:"column:name"`
	HouseName                   string    `json:"house_name" gorm:"column:house_name"`
	FatherName                  string    `json:"father_name" gorm:"column:father_name"`
	PhNumber1                   string    `json:"ph_number_1" gorm:"column:ph_number_1"`
	PhNumber2                   string    `json:"ph_number_2" gorm:"column:ph_number_2"`
	OfficePhNumber              string    `json:"office_ph_number" gorm:"column:office_ph_number"`
	UaeHomePhNumber             string    `json:"uae_home_ph_number" gorm:"column:uae_home_ph_number"`
	Email                       string    `json:"email" gorm:"column:email"`
	BloodGroup                  string    `json:"blood_group" gorm:"column:blood_group"`
	PassportNumber              string    `json:"passport_number" gorm:"column:passport_number"`
	Dob                         string    `json:"dob" gorm:"column:dob"`
	Job                         string    `json:"job" gorm:"column:job"`
	ComapnyName                 string    `json:"company_name" gorm:"column:comapny_name"`
	CompanyPostCode             int       `json:"comaany_post_code" gorm:"column:company_post_code"`
	ComapnyArea                 string    `json:"company_area" gorm:"column:comapny_area"`
	ComapnyEmirates             string    `json:"company_emirates" gorm:"column:comapny_emirates"`
	ComapnyInstitution          string    `json:"company_institution" gorm:"column:comapny_institution"`
	Qualification               string    `json:"qualification" gorm:"column:qualification"`
	JobQualification            string    `json:"job_qualification" gorm:"column:job_qualification"`
	UaeLicenceType              string    `json:"uae_licence_type" gorm:"column:uae_licence_type"`
	UaeResidential              string    `json:"uae_residential" gorm:"column:uae_residential"`
	UaeArea                     string    `json:"uae_area" gorm:"column:uae_area"`
	UaeBuilding                 string    `json:"uae_building" gorm:"column:uae_building"`
	UaeFlatno                   string    `json:"uae_flatno" gorm:"column:uae_flatno"`
	UaeEmirate                  string    `json:"uae_emirate" gorm:"column:uae_emirate"`
	IsMarried                   string    `json:"is_married" gorm:"column:is_married"`
	IsFamilyNear                string    `json:"is_family_near" gorm:"column:is_family_near"`
	NoBoysChildren              int       `json:"no_boys_children" gorm:"column:no_boys_children"`
	NoGirlsChildren             int       `json:"no_girls_children" gorm:"column:no_girls_children"`
	UaeRelative                 string    `json:"uae_relative" gorm:"column:uae_relative"`
	UaeRelativePh               string    `json:"uae_relative_ph" gorm:"column:uae_relative_ph"`
	UaeRelationship             string    `json:"uae_relationship" gorm:"column:uae_relationship"`
	HomeAddres                  string    `json:"home_addres" gorm:"column:home_addres"`
	HomePlace                   string    `json:"home_place" gorm:"column:home_place"`
	PersonToContact             string    `json:"person_to_contact" gorm:"column:person_to_contact"`
	PersonToContactRelationship string    `json:"person_to_contact_relationship" gorm:"column:person_to_contact_relationship"`
	HomeNumber                  string    `json:"home_number" gorm:"column:home_number"`
	MahalNumber                 string    `json:"mahal_number" gorm:"column:mahal_number"`
	ImageLocation               string    `json:"image_location" gorm:"column:image_location"`
	CreatedAt                   time.Time `json:"-"`
	UpdatedAt                   time.Time `json:"-"`
	Password                    string    `gorm:"-"`
	PasswordHash                string    `json:"-" gorm:"column:password_hash"`
}

// Profile model for updating profile image api
type Profile struct {
	ImageLocation string `json:"image_location"`
}

// MemberSignIn for signin member
type MemberSignIn struct {
	MemberID string `json:"member_id"`
	Password string `json:"password"`
}

type MemberSignInRes struct {
	Name     string `json:"name"`
	MemberID string `json:"member_id"`
	ImageURL string `json:"image_url"`
	Token    string `json:"token"`
}

type MemberShortResp struct {
	MemberID      string
	Name          string
	PhNumber1     string `json:"ph_number_1"`
	Email         string
	ImageLocation string `json:"image_location"`
}
