
// Assigning a HTML string to variable "buildParkHtml". Called in results.js. "park" parameter comes from the .then on results.js
const buildParkHtml = park => {

    // If statement checks if the visited key has a value of true. If so, the string is returned with an id of "visited"
    if(park.visited === true) {
      return  `
        <article id="visited">
        <h3>${park.name}</h3>
        <p>${park.state}</p>
        </article><br>`

        // Else statement returns a string with an id of "not_visited"
    } else {
        return `
        <article id="not_visited">
        <h3>${park.name}</h3>
        <p>${park.state}</p>
        </article><br>`
    }
}
//  console.log(buildParkHtml)




