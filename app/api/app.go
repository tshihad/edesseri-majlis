package api

import (
	"majlis/app/core"
	"majlis/app/data"

	"github.com/go-redis/redis/v7"

	"github.com/jinzhu/gorm"
	"github.com/sirupsen/logrus"
)

// App is the api layer container consists all handlers
// new handlers or api should be child methods of App
type App struct {
	data.Repo
	logrus.FieldLogger
	core.Response
}

// NewApp create new App instance
func NewApp(db *gorm.DB, logger logrus.FieldLogger, r *redis.Ring) *App {
	repo := data.NewRepo(db, r)
	return &App{
		Repo:        repo,
		FieldLogger: logger,
		Response:    core.Response{FieldLogger: logger},
	}
}
