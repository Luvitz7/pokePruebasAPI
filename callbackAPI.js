console.log("Hola mundo")

function newPoke () {
    let id_pokemon = 1 + Math.floor(Math.random() * 649);
    const pokemonRandom = `https://pokeapi.co/api/v2/pokemon/${id_pokemon}`; 

    fetch(pokemonRandom)
.then(res => res.json())
.then(data => {
    console.log(data);
    const pokemon = {
        name : data.name,
        pic: data.sprites.other.dream_world.front_default,
        height: data.height,
        type: data.types[0].type.name,
    }
    document.querySelector('img').src = pokemon.pic;
    document.getElementById('pokename').innerHTML = pokemon.name;
    document.getElementById('type').innerText = pokemon.type;
    document.getElementById('idpoke').innerHTML= id_pokemon;
}) 
}

newPoke();

console.log(pokemonRandom);

console.log(id_pokemon);


