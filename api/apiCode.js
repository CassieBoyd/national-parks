// Assigning the base URL to variable "parksApi"
const parksApi = "http://localhost:8088/parks"

// Fetch does a get call on a URL string to get back data.
const searchParks = (searchInput) => fetch(`${parksApi}`)
