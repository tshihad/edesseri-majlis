package core

var staticHost = "http://localhost/static/"

// SetStaticHost set host
func SetStaticHost(host string) {
	if host == "" {
		panic("static_host is not defined app")
	}
	if host[len(host)-1] != '/' {
		host += "/"
	}
	staticHost = host
}

// GetStaticHost gets host
func GetStaticHost() string {
	return staticHost
}
