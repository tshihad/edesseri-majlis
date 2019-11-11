FROM golang:1.12.13-alpine3.9 as backend
ARG SSH_KEY

RUN apk update && \
    apk add git openssh-client gcc nodejs
RUN mkdir -p /root/.ssh && \
    echo "$SSH_KEY" > /root/.ssh/id_rsa && \
    chmod 0600 /root/.ssh/id_rsa && \
    eval `ssh-agent` && \
    ssh-add /root/.ssh/id_rsa && \
    ssh-keyscan github.com >> /root/.ssh/known_hosts
ENV GOPATH /go
RUN go get bitbucket.org/liamstask/goose/cmd/goose
RUN mkdir /app
WORKDIR /app
RUN git clone git@github.com:tshihad/edesseri-majlis.git
RUN cd edesseri-majlis && CGO_ENABLED=0 go build
RUN cd migration && /go/bin/goose -env local up
RUN rm rm /root/.ssh/id_rsa \
    && unset SSH_KEY

WORKDIR /app/edesseri-majlis/web
RUN npm i
RUN npm run build


FROM alpine:3.7
WORKDIR /majlis
RUN mkdir -p /majlis/web
COPY --from=backend /app/edesseri-majlis/majlis .
COPY --from=backend /app/edesseri-majlis/web/build ./web
COPY --from=backend /app/edesseri-majlis/config .

EXPOSE 8080
CMD ./majlis