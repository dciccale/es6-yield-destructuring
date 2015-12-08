# Handling errors from async functions with es6 yield and destructuring

Exploring error handling using `yield` and `destructuring`.

## Requirements

Node v4.2.2

## Installation

```sh
$ npm i
```

## Run

```sh
$ npm start
```

## Test

```sh
$ npm t
```

with curl

```sh
$ npm start
Server listening on 9001
$ curl http://localhost:9001/tasks/1
[{"id":1,"user_id":1,"description":"drink beer"}]
$ curl http://localhost:9001/tasks/2
No tasks found
$ curl http://localhost:9001/users
[{"id":1,"name":"test"},{"id":2,"name":"test2"}]
```
