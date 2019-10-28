// Function definition that takes allParks (response.parks) as an argument. 
const displayParkHtml = (allParks) => {

    // Declare parkResultsHtml as an empty string.
    let parkResultsHtml = ""
  
    // .forEach loop loops through allParks (response.parks) array.
    allParks.forEach(park => {
  
      // Variable parkHtml is assigned to the value returned from calling the function buildParkHtml.
      let parkHtml = buildParkHtml(park)
  
      // parkHtml is added to the existing value of parkResultsHtml.
      parkResultsHtml += parkHtml
    });
  
    // Searching the DOM for tag with id "parking-lot" and assigning it to variable "sectionSelection"
const sectionSelection = document.querySelector("#parking-lot")

// The innerHTML (area between opening and closing tags) is populated with the value of variable "park".
// sectionSelection.innerHTML = parkResultsHtml
  }