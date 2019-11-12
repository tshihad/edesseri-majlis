FROM alpine:3.7
WORKDIR /app
COPY majlis .
COPY config config
EXPOSE 8080
CMD ./majlis