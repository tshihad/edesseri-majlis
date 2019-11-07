package data

import (
	"majlis/app/models"
)

func (r *RepoImp) CreateDownload(d models.Downloads) error {
	return r.db.Create(&d).Error
}
