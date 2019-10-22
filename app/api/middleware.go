package api

import (
	"net/http"

	"github.com/sirupsen/logrus"
)

func validateUser(logger logrus.FieldLogger) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			// validate user
			next.ServeHTTP(w, r)
		}
		return http.HandlerFunc(fn)
	}
}

func validateAdmin(logger logrus.FieldLogger) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			// validate user
			next.ServeHTTP(w, r)
		}
		return http.HandlerFunc(fn)
	}
}
func loggerhandler(logger logrus.FieldLogger) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		fn := func(w http.ResponseWriter, r *http.Request) {
			fields := logrus.Fields{}
			for i, v := range r.Header {
				for _, vv := range v {
					fields[i] = vv
				}
			}
			fields["Path"] = r.URL.Path
			fields["Method"] = r.Method
			logger.WithFields(fields).Info("HTTP Logger")
			next.ServeHTTP(w, r)
		}
		return http.HandlerFunc(fn)
	}
}
