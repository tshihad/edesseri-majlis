package api

import (
	"fmt"
	"image"
	_ "image/jpeg"
	_ "image/png"
	"io"
	"majlis/app/core"
	"majlis/app/models"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"
)

func uploadFile(r *http.Request, formTag, uploadLocation string, ext []string) (string, error) {

	// Parse our multipart form, 10 << 20 specifies a maximum
	// upload of 10 MB files.
	r.ParseMultipartForm(10 << 20)
	file, handler, err := r.FormFile(formTag)
	if err != nil {
		return "", errors.Wrap(err, "failed to read "+formTag+" in form")
	}
	a := handler.Header
	fmt.Println(a)
	fname := strings.Split(handler.Filename, ".")
	if len(fname) < 1 || !contains(fname[len(fname)-1], ext) {
		return "", errors.New("Invalid file or extension")
	}
	defer file.Close()
	fileLocation := uploadLocation + "/" + strconv.Itoa(int(time.Now().Unix())) + "_" + handler.Filename
	newFile, err := os.OpenFile(core.STATIC+fileLocation, os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		return "", errors.Wrap(err, "Failed to create tmp file")
	}
	defer newFile.Close()
	io.Copy(newFile, file)
	return fileLocation, nil
}

func getParams(r *http.Request) (int, int, error) {
	limit, err := strconv.Atoi(chi.URLParam(r, "limit"))
	if err != nil {
		return 0, 0, err
	}
	offset, err := strconv.Atoi(chi.URLParam(r, "offset"))
	if err != nil {
		return 0, 0, err
	}
	return limit, offset, nil
}

func contains(s1 string, s2 []string) bool {
	for _, v := range s2 {
		if v == s1 {
			return true
		}
	}
	return false
}

func getDimensions(location string) (models.Dimension, error) {
	var d models.Dimension
	f, err := os.Open(location)
	if err != nil {
		return d, errors.New("Failed to get image dimension")
	}
	m, _, err := image.DecodeConfig(f)
	if err != nil {
		return d, errors.New("Failed to get image dimension")
	}
	d = models.Dimension{
		Height: m.Height,
		Width:  m.Width,
	}
	return d, nil
}
