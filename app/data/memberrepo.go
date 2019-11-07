package data

import (
	"majlis/app/core"
	"majlis/app/models"
	"strconv"

	"github.com/jinzhu/gorm"

	"github.com/pkg/errors"
)

// GetMember get user from db
func (r *RepoImp) GetMember(member models.Member) (models.Member, error) {
	err := r.db.Where(member).First(&member).Error
	return member, err
}

// CreateMember insert new member to db
func (r *RepoImp) CreateMember(member models.Member) error {
	err := r.db.Create(member).Error
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
func (r *RepoImp) GetMembers(limit, offset int) ([]models.Member, error) {
	var members []models.Member
	err := r.db.Limit(limit).Offset(offset).Find(&members).Error
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
	memberID = member.MemberID
	if err == gorm.ErrRecordNotFound || memberID == "" {
		newID = core.MEMBER_PREFIX + zeroArr[:len(zeroArr)-1] + "1"
		return newID, nil
	}
	if err != nil {
		return memberID, err
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
