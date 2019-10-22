package cmd

import (
	"majlis/app/api"
	"majlis/app/core"
	"net/http"
	"os"
	"sync"

	"github.com/spf13/viper"

	"github.com/jinzhu/gorm"
	"github.com/sirupsen/logrus"
)

// Execute Starting point of app
func Execute() {
	mustPrepareConfig()
	// logger will print into system output or console
	logger := core.NewLogger(logrus.InfoLevel, os.Stdout)
	db := mustPrepareDB(logger)
	serveApp(db, logger)
}

// serveApp serves app in given host and port
func serveApp(db *gorm.DB, logger logrus.FieldLogger) {
	var wg sync.WaitGroup
	app := api.NewApp(db, logger)
	wg.Add(1)
	go func() {
		err := http.ListenAndServe(viper.GetString("app.host")+":"+viper.GetString("app.port"), app.Router())
		if err != nil {
			panic(err)
		}
		wg.Done()
	}()
	wg.Wait()
}
