// Function definition.
const buildParkList = () => {

    // Assiging a string to variable "park".
const park = 
`<article>
    <h3>Park Name</h3>
    <p>State the park in located in</p>
</article>`
// console.log(park)

// Searching the DOM for tag with id "parking-lot" and assigning it to variable "sectionSelection"
const sectionSelection = document.querySelector("#parking-lot")

// The innerHTML (area between opening and closing tag) is populated with the value of variable "park".
sectionSelection.innerHTML = park

}
