// Function definition. Called in main.js
const displayParkHtml = () => {

    // Declare parkResultsHtml as an empty string.
    let parkResultsHtml = ""

    // Calling fetchParks from apiCode.js
    fetchParks()

        // "parks" parameter is the response from the fetch call. .then waits for the data to be returned before executing.
        .then(parks => {
            // console.log(parks)

            // .forEach loop loops through parks array.
            parks.forEach(park => {

                // Variable parkHtml is assigned to the value returned from calling the function buildParkHtml (defined on renderToDom.js)
                let parkHtml = buildParkHtml(park)

                // parkHtml is added to the existing value of parkResultsHtml.
                parkResultsHtml += parkHtml
            })
            // console.log(parkResultsHtml)

            // Searching the DOM for tag with id "parking-lot" and assigning it to variable "sectionSelection"
            const sectionSelection = document.querySelector("#parking-lot")

            // The innerHTML (area between opening and closing tags) is populated with the value of variable "parkResultsHtml".
            sectionSelection.innerHTML = parkResultsHtml
        });

}