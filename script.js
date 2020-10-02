let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");

let h1 = document.querySelector("h1");


async function getPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
    let data = await response.json();
    console.log(data.sprites.front_default);
    let pokemonName = data.name;
    let pokemonNo = data.order;
    let pokemonHeight = data.height;
    let pokemonWeight= data.weight;
    let pokemonMove1 = data.moves[0].move.name;
    let pokemonMove2 = data.moves[1].move.name;
    let pokemonMove3 = data.moves[2].move.name;
    let pokemonMove4 = data.moves[3].move.name;
    let pokemonMove5 = data.moves[4].move.name;
    h1.innerText = `${pokemonName}, I CHOOSE YOU!`;
    p1.innerText = `Pokemon Number: ${pokemonNo}`;
    p2.innerText = `Pokemon Height: ${pokemonHeight}`;
    p3.innerText = `Pokemon Weight: ${pokemonWeight}`;;
    p4.innerText = `Pokemon Moves: ${pokemonMove1}, ${pokemonMove2}, ${pokemonMove3}, ${pokemonMove4}, ${pokemonMove5}`;
    img = document.createElement("img");
    img.src = data.sprites.front_default;
    body = document.querySelector("body");
    body.appendChild(img);
} getPokemon();