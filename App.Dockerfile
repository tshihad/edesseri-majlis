FROM golang:latest as backend

WORKDIR /majlis
COPY app .
COPY config .
RUN CGO_ENABLED=0 go build

FROM node:12.13.0-alpine as frontend
WORKDIR /majlis/web
COPY web /majlis
COPY config /majlis
RUN npm i
RUN npm install -g serve
RUN npm run build


FROM alpine:latest
WORKDIR /majlis
RUN mkdir -p /majlis/web
COPY --from=backend /majlis/majlis .
COPY --from=frontend /majlis/web/build ./web
EXPOSE 8080
CMD ./majlis