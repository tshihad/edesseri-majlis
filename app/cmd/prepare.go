package cmd

import (
	"fmt"

	"github.com/jinzhu/gorm"
	"github.com/sirupsen/logrus"

	// initialize postgres
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/spf13/viper"
)

// uses postgres sql
func mustPrepareDB(logger logrus.FieldLogger) *gorm.DB {
	dbString := fmt.Sprintf(
		"host=%s port=5432 user=%s dbname=%s password=%s sslmode=disable",
		viper.GetString("db.host"), viper.GetString("db.user"), viper.GetString("db.name"), viper.GetString("db.pass"),
	)
	db, err := gorm.Open("postgres", dbString)
	if err != nil {
		panic(err)
	}
	db.SingularTable(true)
	db.LogMode(true)
	db.SetLogger(logger)
	return db
}

func mustPrepareConfig() {
	viper.SetConfigName("app")
	viper.AddConfigPath("config")
	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}
}
