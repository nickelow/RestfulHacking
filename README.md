# RestfulHacking
REST API for Take Home Project

## To Start:
`npm install`

`npm start`

##### At this point your server should connect to localhost, and a success message should appear in the terminal

## Testing the API
##### Run the following commands in succession to test the API:
`curl --header "Content-Type: application/json" -d "{\"username\":\"matt\"}" http://localhost:8080/users`

`curl http://localhost:8080/users`

`curl http://localhost:8080/users/matt`

`curl --header "Content-Type: application/json" -d "{\"user\":\"matt\", \"title\":\"Report\"}" http://localhost:8080/reports`

`curl http://localhost:8080/reports`

`curl http://localhost:8080/reports/1`

`curl -X PUT --header "Content-Type: application/json" -d "{\"user\":\"matt\", \"title\":\"New\"}" http://localhost:8080/reports/1`

`curl  http://localhost:8080/reports/1`

`curl -X DELETE  http://localhost:8080/reports/1`
