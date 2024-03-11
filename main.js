const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
const main = document.getElementById('main');
const a = {}

a.listarTiposPokemon = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

// const input = document.getElementById("txtPesquisa"); 
// input.addEventListener("click", () => {
//     input.placeholder = ""
// })

function loadData(){

    fetch(urlPokemon)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((listaPokemons) => listaPokemons.map(a.listarTiposPokemon))
    .then((dadosPokemon) => Promise.all(dadosPokemon))
    .then((pokemons) => {
    
        const newHTML = pokemons.map(preencherPokemon).join("");
        main.innerHTML = newHTML;
        }
    )
}

function preencherPokemon(pokemon){
    return `<a>
    <div id ="cardPokemon" class='${pokemon.types[0].type.name}'>
        <div>
            <div class="textCard">
                <span class="numberPosition">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>                    
            </div>

            <div id="categories">
                ${converterTipos(pokemon.types).join('')}
            </div>
        </div>

        <div class="divImage">
            <img src="${pokemon.sprites.front_default}" alt="Pokémon #${pokemon.id}" class='imgSprite' />
        </div>
    </div>
</a>`
}

function converterTipos(tipos){
    return tipos.map((typeSlot) => `<div class="category ${typeSlot.type.name}Span"><span>${typeSlot.type.name}</span></div>`)
}

function listarTiposPokemon(pokemon){
    return fetch(pokemon.url).then((response) => response.json())
}

// async function preencherDadosPokemon(id){

//     if(categories != null){
//         categories.textContent = "";
//     }

//     if(categories == null){

//         categories = document.createElement('div');
//         categories.id = "categories";
//     }
    
//     const reponse = await fetch(urlPokemon + id);
//     const data = await reponse.json();
//     listaTiposPokemon = await data.types;
//     nomePokemon = await data.name
//     const color = await data.types[0].type.name;
    
//     await listaTiposPokemon.forEach(item => {
//         categories.innerHTML += `<div class="category ${item.type.name}Span">
//                                     <span>${item.type.name}</span>
//                                 </div>`
//     });

//     main.innerHTML +=  `<a>
//                             <div id ="cardPokemon" class='${color}'>
//                                 <div>
//                                     <div class="textCard">
//                                         <span class="numberPosition">#${id}</span>
//                                         <span class="name">${nomePokemon}</span>                    
//                                     </div>

//                                     <div id="categories">
//                                         ${categories.innerHTML}
//                                     </div>
//                                 </div>

//                                 <div class="divImage">
//                                     <img src="${data.sprites.front_default}" alt="Pokémon #${id}" class='imgSprite' />
//                                 </div>
//                             </div>
//                         </a>`
// }

loadData();