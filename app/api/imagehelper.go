package api

import (
	"io"
	"net/http"
	"os"
	"time"

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
