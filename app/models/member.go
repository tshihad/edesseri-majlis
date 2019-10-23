package models

// Member model
type Member struct {
	MemberID             string `json:"member_id" gorm:"primary_key" validate:"required"`
	PasswordHash         string `json:"-" gorm:"column:password_hash"`
	Password             string `json:"password" validate:"required" gorm:"-"`
	FName                string `json:"fname" gorm:"column:fname" validate:"required"`
	LName                string `json:"lname" gorm:"column:lname" validate:"required"`
	FathersName          string `json:"fathers_name" gorm:"column:fathers_name" validate:"required"`
	Phone1               string `json:"phone_1" gorm:"column:phone_1" validate:"required,number"`
	Phone2               string `json:"phone_2,omit_empty" gorm:"column:phone_2" validate:"number"`
	Email                string `json:"email" gorm:"column:email" validate:"required,email"`
	ResidentWorkPlace    string `json:"res_work_place" gorm:"column:res_work_place" validate:"required"`
	ResidentCompany      string `json:"res_company" gorm:"column:res_company" validate:"required"`
	ResidentWorkPhone    string `json:"res_work_phone" gorm:"column:res_work_phone" validate:"required"`
	ResidentAddressPlace string `json:"res_address_place" gorm:"column:res_address_place" validate:"required"`
	ResidentAddressArea  string `json:"res_address_area" gorm:"column:res_address_area" validate:"required"`
	ResidentAddressState string `json:"res_address_state" gorm:"column:res_address_state" validate:"required"`
	HomePlace            string `json:"home_place" gorm:"column:home_place" validate:"required"`
	HomePost             string `json:"home_post,omit_empty" gorm:"column:home_post"`
	HomeDistrict         string `json:"home_district,omit_empty" gorm:"column:home_district"`
	HomeState            string `json:"home_state,omit_empty" gorm:"column:home_state"`
	HomePin              string `json:"home_pin,omit_empty" gorm:"column:home_pin" validate:"number,len=6"`
	HomePhone            string `json:"home_phone" gorm:"column:home_phone"`
	MahalCardNumber      string `json:"mahal_card_number" gorm:"column:mahal_card_number" validate:"required,number"`
	ImmidiateName        string `json:"im_name" gorm:"column:im_name" validate:"required"`
	ImmidiatePhone1      string `json:"im_phone_1" gorm:"column:im_phone_1" validate:"required,number"`
	ImmidiatePhone2      string `json:"im_phone_2" gorm:"column:im_phone_2" validate:"required,number"`
	ImmidiatePhone3      string `json:"im_phone_3" gorm:"column:im_phone_3" validate:"required,number"`
	PhotoLocaltion       string `json:"photo_localtion" gorm:"column:photo_localtion" validate:"required"`
}
