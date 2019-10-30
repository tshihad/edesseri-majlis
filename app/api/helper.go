package api

import (
	"io"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"
)

func uploadImage(r *http.Request, formTag string, uploadLocation string) (string, error) {

	// Parse our multipart form, 10 << 20 specifies a maximum
	// upload of 10 MB files.
	r.ParseMultipartForm(10 << 20)
	file, handler, err := r.FormFile(formTag)
	if err != nil {
		return "", errors.Wrap(err, "failed to read "+formTag+" in form")
	}
	defer file.Close()
	fileLocation := uploadLocation + time.Now().String() + handler.Filename
	newFile, err := os.OpenFile(fileLocation, os.O_CREATE|os.O_WRONLY, 0666)
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
