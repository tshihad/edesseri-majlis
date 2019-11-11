package data

import (
	"encoding/json"

	"github.com/go-redis/cache/v7"
	"github.com/go-redis/redis/v7"
	"github.com/jinzhu/gorm"
)

// RepoImp implements repo instance
type RepoImp struct {
	db *gorm.DB
	*cache.Codec
}

// NewRepo new repo instance
func NewRepo(db *gorm.DB, ring *redis.Ring) *RepoImp {
	codec := &cache.Codec{
		Redis:     ring,
		Marshal:   json.Marshal,
		Unmarshal: json.Unmarshal,
	}
	return &RepoImp{
		db:    db,
		Codec: codec,
	}
}
