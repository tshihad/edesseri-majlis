package core

import (
	"encoding/json"
	"net/http"

	"github.com/sirupsen/logrus"
)

// Response for response function
type Response struct {
	logrus.FieldLogger
}

type successResponse struct {
	Status string      `json:"status"`
	Result interface{} `json:"result"`
}

type failResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

// Success attach response message with response writer.
// Response will convert in form of successResponse struct
func (r *Response) Success(w http.ResponseWriter, status int, data interface{}) {
	w.WriteHeader(status)
	s := successResponse{
		Status: "OK",
		Result: data,
	}
	out, err := json.Marshal(s)
	if err != nil {
		r.Error("Failed to unmarshal data ", err)
		w.Write([]byte(err.Error()))
		return
	}
	w.Write(out)
}

// Fail attach fail message along with error code in failResponse
// struct
func (r *Response) Fail(w http.ResponseWriter, status int, message string, err error) {
	r.Error(err, message)
	w.WriteHeader(status)
	f := failResponse{
		Status:  "error",
		Message: message,
	}
	out, err := json.Marshal(f)
	if err != nil {
		r.Error("Failed to unmarshal data ", err)
		w.Write([]byte(err.Error()))
		return
	}
	w.Write(out)
}
