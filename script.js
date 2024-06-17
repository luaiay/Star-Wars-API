console.log('Hello world!, lets start!')


// Get elements from DOM
const helpMeButton = document.querySelector('#helpMe-button')
const displayResults = document.querySelector('.display-results')

helpMeButton.addEventListener('click', getInfoFromApi)

// write function to send request
// update when response comes
async function getInfoFromApi() {
    const baseUrl = 'https://swapi.dev/api/people/10/'
    const settings = {
        method: 'GET',  // valfritt att ha med
        headers: {
            //	'X-Api-Key': apiKey
        }
    }
    const response = await fetch(baseUrl, settings)
    const data = await response.json()

    // write info to console

    const name = data.name

    console.log(data)
    console.log(name)
    displayResults.innerText = name



}