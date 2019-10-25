// Assiging a string to variable "allParks".
const allParks = park => `
<article>
    <h3>${park.name}</h3>
    <p>State the park in located in</p>
</article>`
//  console.log(allParks)

// Function definition.
const buildParkList = () => {

// Searching the DOM for tag with id "parking-lot" and assigning it to variable "sectionSelection"
const sectionSelection = document.querySelector("#parking-lot")

// The innerHTML (area between opening and closing tags) is populated with the value of variable "park".
sectionSelection.innerHTML += allParks

}
