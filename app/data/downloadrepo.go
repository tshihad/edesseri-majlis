package data

import (
	"majlis/app/models"
)

func (r *RepoImp) CreateDownload(d models.Downloads) error {
	return r.db.Create(&d).Error
}

func (r *RepoImp) GetDownloads(isPublic bool) ([]models.Downloads, error) {
	var downloads []models.Downloads
	where := ""
	if !isPublic {
		where = "is_public=true"
	}
	err := r.db.Model(models.Downloads{}).Where(where).Scan(&downloads).Error
	return downloads, err
}
