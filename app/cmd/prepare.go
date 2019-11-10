package cmd

import (
	"fmt"
	"majlis/app/core"

	"github.com/go-redis/redis/v7"

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
	core.SetStaticHost(viper.GetString("app.static_host"))
}

func mustPrepareRedis() *redis.Ring {
	port := viper.GetString("redis.port")
	host := viper.GetString("redis.host")
	if port == "" || host == "" {
		panic("port or host of redis not defined")
	}
	r := redis.NewRing(&redis.RingOptions{
		Addrs: map[string]string{
			"rds-server-1": host + ":" + port,
		},
	})
	if err := r.Ping().Err(); err != nil {
		panic(err)
	}
	return r
}
