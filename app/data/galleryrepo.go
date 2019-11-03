package data

import "majlis/app/models"

// CreateEGallery to create Event gallery in db
func (r *RepoImp) CreateEGallery(egallery models.EventGallery) (int, error) {
	err := r.db.Create(&egallery).Error
	return egallery.ID, err
}

// GetEGallerys returns all gallery data
func (r *RepoImp) GetEGallerys(category string) ([]models.EventGallery, error) {
	var gallerys []models.EventGallery
	err := r.db.Where(models.EventGallery{Category: category}).Find(&gallerys).Error
	return gallerys, err
}

// DeleteEGallery delete specific entry from gallery table
func (r *RepoImp) DeleteEGallery(id int) error {
	return nil
}
