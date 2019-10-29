# RestfulHacking
REST API for Take Home Project

## To Start:
`npm install`

`npm start`

##### At this point your server should connect to localhost, and a success message should appear in the terminal

##### You may need to adjust the password settings in the config/config.json file to connect to MySQL.

## Testing the API
##### Run the following commands from your terminal in succession to test the API:
`curl --header "Content-Type: application/json" -d "{\"username\":\"matt\"}" http://localhost:8080/users`

This should create a user for you to use when creating a report.

`curl http://localhost:8080/users`

Confirm that the user has been created.

`curl http://localhost:8080/users/matt`

Confirm that you can GET the specific user.

`curl --header "Content-Type: application/json" -d "{\"user\":\"matt\", \"title\":\"Report\"}" http://localhost:8080/reports`

Use the newly created user to create a report.

`curl http://localhost:8080/reports`

Confirm the report has been created.

`curl http://localhost:8080/reports/1`

Confirm you can GET the specific report.

`curl -X PUT --header "Content-Type: application/json" -d "{\"user\":\"matt\", \"title\":\"New\"}" http://localhost:8080/reports/1`

Update the title of the report.

`curl  http://localhost:8080/reports/1`

Confirm the report has been updated.

`curl -X DELETE  http://localhost:8080/reports/1`

Delete the report.

`curl  http://localhost:8080/reports/1`

Confirm the report has been deleted.
