import fetch from 'node-fetch';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

// com fetch
function fetchWithPromise() {
    fetch(baseUrl).then((response) => {
    const json = response.json();
    console.log(json);
    });
}
fetchWithPromise();

// com async/await
async function fetchAsync() {
    const response = await fetch(baseUrl);
    const json = await response.json();
    console.log(json);
}
fetchAsync();
