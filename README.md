# Restaurant-API

example for env

```
PORT=5000
DB_URI=mongodb://localhost:27017/xxxxxx
```

To build the docker image

```
docker build -t my-nodejs-app .
```

To run the docker container

```
docker run -d -p 5000:5000 --name restaurant-app my-nodejs-app
```
