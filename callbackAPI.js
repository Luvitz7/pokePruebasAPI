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
    document.getElementById('idpoke').innerHTML= id_pokemon;
    document.getElementById('type').innerText = pokemon.type;
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
}) 
}

newPoke();




