const $ = selector => document.getElementById(selector);
const searcherInput = $('searcher');

searcherInput.addEventListener('keyup', e => {
    let texto = e.target.value;
    searcherInput.setAttribute('value', texto);
    return texto;
});



function fetchPoke (uri) {
    fetch(uri)
    .then(res => res.json())
    .then(data => newPoke(data)) 
    .catch (e => {console.log(e)
       notFound();
    })
}

function randomPoke () {
    let id_pokemon = 1 + Math.floor(Math.random() * 649);
    const pokemonRandom = `https://pokeapi.co/api/v2/pokemon/${id_pokemon}`; 
    fetchPoke(pokemonRandom);
}

function findPoke () {
    const texto = searcherInput.value;
    if (Boolean(texto)) {
        const findPoke = `https://pokeapi.co/api/v2/pokemon/${texto}/`;
        fetchPoke(findPoke);
    } else {
        alert('No haz escrito nada')
    }
}

randomPoke();

// funcionamiento de la Pokedex

const topCover = $('topCover');
const bottomCover = $('bottomCover');
let pokeballBtn = false

// Renderiza al Pokemon
function newPoke (data) {
    const abilitiesContainer = document.querySelector('abilities')

    let pokemon = {
        exp_base: data.base_experience,
        name : data.name,
        height: data.height,
        id: data.id,
        pic: data.sprites.other.dream_world.front_default,
        type: data.types[0].type.name,
        weight: data.weight,
        abilities: {
            ability: data.abilities[0].ability.name,
            hidden_ability1: data.abilities[0].is_hidden
        },
        stats: {
            hp: data.stats[0].base_stat,
            atk: data.stats[1].base_stat,
            def: data.stats[2].base_stat,
            specialAtk: data.stats[3].base_stat,
            specialDef: data.stats[4].base_stat,
            speed: data.stats[5].base_stat
        }
    };
     
    if (Boolean(data.abilities[1])){
        pokemon = {
            ...pokemon,
            abilities: { 
                ...pokemon.abilities,
                ability2: data.abilities[1].ability.name,
                hidden_ability2: data.abilities[1].is_hidden
            }
        };
        // abilitiesContainer.appendChild = `<p>${pokemon.weight}<p>`
        if (Boolean(data.abilities[2])) {
            pokemon = {
                ...pokemon,
                abilities: { 
                ...pokemon.abilities,
                ability3: data.abilities[2].ability.name,
                hidden_ability3: data.abilities[2].is_hidden
                }
            }} 
    } else {
        console.log('No hay segundas habilidades');
    };

    if(Boolean(data.types[1])){
        pokemon = {
            ...pokemon,
            type2: data.types[1].type.name,
        }
    }
    console.log('pokemon', pokemon);
    document.querySelector('img').src = pokemon.pic;
    // Render de los Pokes pantalla principal
    $('pokename').innerHTML = pokemon.name;
    $('idpoke').innerHTML= pokemon.id;
    $('type').innerText = pokemon.type;
    switch (pokemon.type) {
        case "bug":
            document.getElementById("card").style.background = 'linear-gradient(to right, #f1e767 0%, #feb645 100%)';
        break;
        case "dark":
            document.getElementById("card").style.background = ' linear-gradient(to bottom, #707070 0%, #707070 48%, #1a1319 100%);';
        break;
        case "dragon":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #cb60b3 0%, #a80077 50%, #c146a1 97%, #db36a4 100%)';
        break;
        case "electric":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #fccd4d 0%, #e0fa4d 46%, #f2ff42 99%, #fceabb 100%)';
        break;
        case "fighting":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #fceabb 0%, #f7a500 55%, #ffb330 100%)';
        break;
        case "fire":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #f85032 0%, #f6290c 3%, #f16f5c 51%, #f02f17 88%, #e73827 100%)';
        break;
        case "flying":
            document.getElementById("card").style.background = ' linear-gradient(to bottom, #d4e4ef 0%, #7dbfed 89%, #7dbfed 100%)';
        break;
        case "ghost":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #6a76f2 0%, #420e42 100%)';
        break;
        case "grass":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #d2ff52 0%, #91e842 100%)';
        break;
        case "ground":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #f3e2c7 0%, #b68d4c 51%, #cc943f 100%)';
        break;
        case "ice":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #b3dced 0%, #39c9f5 53%, #84d5eb 100%)';
        break;
        case "normal":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #ffffff 0%, #f6ffe3 3%, #e9fcc0 100%)';
        break;
        case "poison":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #cb60b3 0%, #661c51 50%, #c146a1 97%, #db36a4 100%)';
        break;
        case "psychic":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #f069a6 0%, #420e42 100%)';
        break;
        case "rock":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #c3c4b2 0%, #533863 100%)';
        break;
        case "steel":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #b0b0b0 0%, #b0b0b0 1%, #737373 13%, #575757 25%, #9c9c9c 38%, #474747 51%, #363636 63%, #6e6e6e 77%, #3b383b 86%, #454545 100%)';
        break;
        case "water":
            document.getElementById("card").style.background = 'linear-gradient(to bottom, #2d9fd4 0%, #2d9fd4 48%, #1933b3 100%)';
        break;
    }

    // Render más informacion pantalla secundaria oculta
    $('hp').innerHTML = `<b>HP:</b> ${pokemon.stats.hp}`
    $('speed').innerHTML = `<b>SPEED:</b> ${pokemon.stats.speed}`
    $('atk').innerHTML = `<b>ATK:</b> ${pokemon.stats.atk}`
    $('def').innerHTML = `<b>DEF:</b> ${pokemon.stats.def}`
    $('atkEsp').innerHTML = `<b>ATK ESP:</b> ${pokemon.stats.specialAtk}`
    $('defEsp').innerHTML = `<b>DEF ESP:</b> ${pokemon.stats.specialDef}`
    $('pokeWeight').innerHTML = `<b>Weight:</b> ${pokemon.weight}`
    $('pokeHeight').innerHTML = `<b>Height:</b> ${pokemon.height}`
}

function notFound () {
    $('pokename').innerHTML = 'Lo siento no encontramos este pokemon';
    document.querySelector('img').src = "https://cdn.pixabay.com/photo/2016/08/06/07/59/pokemon-go-1574001_960_720.png";
    $('idpoke').innerHTML= "";
    $('type').innerText = "";
}
// Estilos de la tapa del Pokedex
function openPokedex () {
    if (!pokeballBtn) {
        topCover.style.transform = "translateY(-100%)";
        bottomCover.style.transform = "translateY(100%)";
        pokeballBtn = true;
    } else {
        pokeballBtn = false
        topCover.style.transform = "translateY(0)";
        bottomCover.style.transform = "translateY(0)"
    }
}