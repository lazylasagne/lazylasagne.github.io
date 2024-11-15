function getRandomPokemonId() {
    return Math.floor(Math.random() * 1010) + 1;
}

async function fetchPokemonData() {
    const pokemonId = getRandomPokemonId();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!response.ok) {
        console.error("Failed to fetch Pokemon data:", +response.statusText)
        return;
    }
    const pokemon = await response.json();
    displayPokemon(pokemon);
}

function displayPokemon(pokemon) {
    const pokemonContainer = document.getElementById('pokemon-container');
    const pokemonName = document.createElement('h1');
    const pokemonImage = document.createElement('img');
    
    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    
    pokemonName.textContent = capitalizedName;
    pokemonName.classList.add('pokemon-name');
    
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add('pokemon-image');
    
    pokemonContainer.innerHTML = '';
    
    pokemonContainer.appendChild(pokemonName);
    pokemonContainer.appendChild(pokemonImage);
}

document.addEventListener('DOMContentLoaded', fetchPokemonData);