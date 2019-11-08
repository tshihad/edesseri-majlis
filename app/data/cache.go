package data

import (
	"crypto/md5"
	"encoding/hex"
	"majlis/app/core"
	"math/rand"
	"strings"
	"time"

	"github.com/go-redis/cache/v7"
)

var letterRunes = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

// VerifyToken verify token and retuns memberID aling with that
func (r *RepoImp) VerifyToken(token string) (string, error) {
	var memberID string
	err := r.Codec.Get(token, &memberID)
	return memberID, err
}

func (r *RepoImp) CreateToken(memberID string) (string, error) {
	var err error
	for i := 0; i < core.CACHE_RETRY; i++ {
		token := generateToken(memberID)
		var temp string
		err := r.Codec.Get(token, &temp)
		if err == nil && temp != "" {
			continue
		}
		err = r.Codec.Set(&cache.Item{
			Key:    token,
			Object: memberID,
		})
		if err != nil {
			return token, nil
		}
	}
	return "", err
}

func generateToken(m string) string {
	rstring := generateRandomString(core.RANDOM_LENGTH) + m
	h := md5.New()
	h.Write([]byte(strings.ToLower(rstring)))
	return hex.EncodeToString(h.Sum(nil))
}

func generateRandomString(n int) string {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	b := make([]rune, n)
	for i := range b {
		b[i] = letterRunes[r.Intn(len(letterRunes))]
	}
	return string(b)
}
