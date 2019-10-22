# Edesseri majlis website

## Project structure
* app -> backend (golang)
* web -> frontend (react)
* config -> configuration for DB and environments

## Setting up
Follow any one of the below (local or docker)
### Local
#### Requirments
* Go 1.11 or above
* Postgresql 9 or above
#### Procedure
* Create database 'majlis'
* Configure database password and user in config/app.json
* run following command
```
GO111MODULE=on go run main.go
```

### Docker
#### Requiments
* Install docker https://docs.docker.com/install/
#### Procedure
* change 
    ```
    "db":{
    "host":"localhost"
    ``` 
    to
    ```
    "db":{
    "host":"db"
    ```
    in `config/app.json` 
* Run following command
```
docker-compose up
```