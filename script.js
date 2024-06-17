console.log('Hello world!, lets start!')


// Get elements from DOM
const helpMeButton = document.querySelector('#helpMe-button')
const displayResults = document.querySelector('.display-results')
const searchInput = document.querySelector('#search')
const searchButton = document.querySelector('#search-button')


helpMeButton.addEventListener('click', getInfoFromApi)
searchButton.addEventListener('click', getNamesFromApi)

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


async function getNamesFromApi() {
    const searchTerm = searchInput.value.trim()
    try {
        const baseUrl = `https://swapi.dev/api/people/?search=${searchTerm}`
        const settings = {
            method: 'GET',
            headers: {
                // 'X-Api-Key': apiKey (om du har en API-nyckel)
            }
        };

        const response = await fetch(baseUrl, settings);
        const data = await response.json();
        // write info to console



        console.log(data)
    } catch (error) {
        console.error('Fel vid hämtning av data:', error);
    }
}
