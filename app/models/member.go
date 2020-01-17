package models

// Member model
type Member struct {
	MemberID                    string `json:"-" gorm:"primary_key"`
	Name                        string `json:"name" gorm:"column:name"`
	HouseName                   string `json:"housename" gorm:"column:house_name"`
	FatherName                  string `json:"fathername" gorm:"column:father_name"`
	PhNumber1                   string `json:"phone_number_1" gorm:"column:ph_number_1"`
	PhNumber2                   string `json:"phone_number_2" gorm:"column:ph_number_2"`
	OfficePhNumber              string `json:"office_phone_number" gorm:"column:office_ph_number"`
	UaeHomePhNumber             string `json:"home_phone_number" gorm:"column:uae_home_ph_number"`
	Email                       string `json:"email" gorm:"column:email"`
	BloodGroup                  string `json:"bloodgroup" gorm:"column:blood_group"`
	PassportNumber              string `json:"passport" gorm:"column:passport_number"`
	Dob                         string `json:"dob" gorm:"column:dob"`
	Job                         string `json:"job" gorm:"column:job"`
	ComapnyName                 string `json:"company_name" gorm:"column:comapny_name"`
	CompanyPostCode             int    `json:"postcode" gorm:"column:comaany_post_code"`
	ComapnyArea                 string `json:"company_area" gorm:"column:company_area"`
	ComapnyEmirates             string `json:"company_emirates" gorm:"column:company_emirates"`
	ComapnyInstitution          string `json:"institution" gorm:"column:company_institution"`
	Qualification               string `json:"education" gorm:"column:qualification"`
	JobQualification            string `json:"jobqualification" gorm:"column:job_qualification"`
	UaeLicenceType              string `json:"uae_licence_type" gorm:"column:uae_licence_type"`
	UaeResidential              string `json:"residential" gorm:"column:uae_residential"`
	UaeArea                     string `json:"area" gorm:"column:uae_area"`
	UaeBuilding                 string `json:"building" gorm:"column:uae_building"`
	UaeFlatno                   string `json:"flat" gorm:"column:uae_flatno"`
	UaeEmirate                  string `json:"emirates" gorm:"column:uae_emirate"`
	IsMarried                   string `json:"marriage_status" gorm:"column:is_married"`
	IsFamilyNear                string `json:"family_status" gorm:"column:is_family_near"`
	NoBoysChildren              int    `json:"no_of_boys" gorm:"column:no_boys_children"`
	NoGirlsChildren             int    `json:"no_of_girls" gorm:"column:no_girls_children"`
	UaeRelative                 string `json:"closest_relative" gorm:"column:uae_relative"`
	UaeRelativePh               string `json:"relative_phone" gorm:"column:uae_relative_ph"`
	UaeRelationship             string `json:"uae_relationship" gorm:"column:uae_relationship"`
	HomeAddres                  string `json:"address" gorm:"column:home_addres"`
	HomePlace                   string `json:"place_home" gorm:"column:home_place"`
	PersonToContact             string `json:"person_to_contact" gorm:"column:person_to_contact"`
	PersonToContactRelationship string `json:"person_to_contact_relation" gorm:"column:person_to_contact_relationship"`
	HomeNumber                  string `json:"phone_home" gorm:"column:home_number"`
	MahalNumber                 string `json:"mahal_phone" gorm:"column:mahal_number"`
	ImageLocation               string `json:"image_location" gorm:"column:image_location"`
	DateOfJoin                  string `json:"date_of_join" gorm:"column:date_of_join"`
	EndDate                     string `json:"end_date" gorm:"column:end_date"`
	Status                      string `json:"member_status" gorm:"column:status"`
	PasswordHash                string `json:"password" gorm:"column:password"`
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
	Name        string `json:"name"`
	MemberID    string `json:"member_id"`
	ImageURL    string `json:"image_url"`
	PhoneNumber string
	Email       string
	Token       string `json:"token"`
}

type MemberShortResp struct {
	MemberID      string
	Name          string
	PhNumber1     string `json:"ph_number_1" gorm:"column:ph_number_1"`
	Email         string
	ImageLocation string `json:"image_location" gorm:"column:image_location"`
	Status        string `json:"Status" gorm:"column:status"`
}
