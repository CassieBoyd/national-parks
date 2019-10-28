// Assigning the base URL to variable "parksApi"
const parksApi = "http://localhost:8088/parks"

// Fetch does a GET call on "parksApi" variable to get back data. Called on results.js
const fetchParks = () => fetch(parksApi)

// .then waits for the response to be sent back then turns the response into JSON format. .json() is a method that can be called on a response stream (which was returned by the fetch call)
.then(response => response.json())

// Logging returned data to the console to see whether fetch is working.
// .then(response => console.log(response))