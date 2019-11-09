package core

var staticHost = "http://localhost/static/"

// SetStaticHost set host
func SetStaticHost(host string) {
	if staticHost[len(staticHost)-1] != '/' {
		staticHost += "/"
	}
	staticHost = host
}

// GetStaticHost gets host
func GetStaticHost() string {
	return staticHost
}
