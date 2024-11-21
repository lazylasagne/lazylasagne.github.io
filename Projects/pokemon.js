let shiny_version;
let normal_version;

function getRandomPokemonId() {
    return Math.floor(Math.random() * 1010) + 1;
}

function formatPokemonName(name_str) {
    return name_str
        .split(/([ \-':])/g)
        .map(word => /^[a-zA-Z]+$/.test(word) ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word)
        .join('');
}

async function fetchPokemonData() {
    const ID = getRandomPokemonId();
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`);
        if (!resp.ok) throw new Error(resp.statusText);
        const pokemon = await resp.json();
        display(pokemon);
    } catch (err) {
        console.error("Failed to fetch data: ", err);
        const container = document.getElementById('pokemon-container');
        container.innerHTML = `<p>Error fetching Pokémon data. Please try again.</p>`;
    }
}

function display(pokemon) {
    const container = document.getElementById('pokemon-container');
    const name_obj = document.createElement('h1');
    const image = document.createElement('img');

    const shiny_version = pokemon.sprites.front_shiny;
    const normal_version = pokemon.sprites.front_default;

    const capitalized = formatPokemonName(pokemon.name);

    name_obj.textContent = capitalized;
    name_obj.classList.add('pokemon-name');

    image.src = normal_version || '';
    image.alt = pokemon.name || "Pokemon sprite";
    image.classList.add('pokemon-image');

    image.addEventListener('click', () => switchToShiny(image, shiny_version, normal_version));
    container.innerHTML = '';
    container.appendChild(name_obj);
    container.appendChild(image);
}

function switchToShiny(image, shiny_version, normal_version) {
    if (image.src === shiny_version && normal_version) {
        image.src = normal_version;
    } else if (shiny_version) {
        image.src = shiny_version;
    }
}

document.addEventListener('DOMContentLoaded', fetchPokemonData);