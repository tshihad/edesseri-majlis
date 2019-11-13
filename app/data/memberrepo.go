package data

import (
	"majlis/app/core"
	"majlis/app/models"
	"strconv"

	"github.com/jinzhu/gorm"

	"github.com/pkg/errors"
)

// GetMember get user from db
func (r *RepoImp) GetMember(memberID string) (models.Member, error) {
	var member models.Member
	if memberID == "" {
		return member, errors.New("Empty member_id")
	}
	err := r.db.Where(models.Member{MemberID: memberID}).First(&member).Error
	return member, err
}

// CreateMember insert new member to db
func (r *RepoImp) CreateMember(member models.Member) error {
	err := r.db.Create(&member).Error
	return err
}

// UpdateMember for update member in db using member id
func (r *RepoImp) UpdateMember(memberID string, member models.Member) (models.Member, error) {
	err := r.db.Model(member).Where(models.Member{MemberID: memberID}).Update(member).Error
	return member, err
}

// DeleteMember deletes member data using member_id
func (r *RepoImp) DeleteMember(memberID string) error {
	return r.db.Delete(models.Member{MemberID: memberID}).Error
}

// GetMembers returns members in given range( according to memberid)
func (r *RepoImp) GetMembers() ([]models.MemberShortResp, error) {
	var members []models.MemberShortResp
	err := r.db.Model(models.Member{}).Select("member_id,name,ph_number_1,email,image_location").Order("member_id").Scan(&members).Error
	return members, err
}

// CreateNewMemberID will fetch last member id in member table and create next member id
// with the help of retrieved member id. look test file for more info
func (r *RepoImp) CreateNewMemberID() (string, error) {
	var memberID string
	var newID string
	var member models.Member
	zeroArr := "0000"
	err := r.db.Select("member_id").Last(&member).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return memberID, err
	}
	memberID = member.MemberID
	if memberID == "" {
		newID = core.MEMBER_PREFIX + zeroArr[:len(zeroArr)-1] + "1"
		return newID, nil
	}
	num, err := strconv.Atoi(memberID[3:])
	if err != nil {
		return memberID, errors.Wrap(err, "failed to parse member id, may be polluted data present in db!! id = "+memberID)
	}
	num = num + 1
	numString := strconv.Itoa(num)
	newID = core.MEMBER_PREFIX + zeroArr[:len(zeroArr)-len(numString)] + numString
	return newID, nil
}
