const container=document.getElementById('container')
//const input=document.getElementById('search')
let pokemonid=500
// function handleSearch(target) {
//     const search = pokemon.name.toLowerCase();
//     const searchMatch = pokemon.filter((element) => {
//       const name = element.pokemon.name.toLowerCase();
//       return name.includes(search);
//     });
    
//   }


 const count=async  () => {
for(let i=1;i<pokemonid;i++){
await (fetchdata(i))

}
} 
const fetchdata=async (id)=> {
const url=`https://pokeapi.co/api/v2/pokemon/${id}`
const responce=await fetch(url)
const data= await responce.json()
createcard(data)
}
count()

const createcard=async (pokemon)=>{
const element=document.createElement('div')
element.classList.add('pokemon')
const tags=`
<div id="wrapper" class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
<div id="image" class="col-md-4">
<img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="pokemon image" class="img-fluid rounded-start" alt="..."/>
</div>
<div class="col-md-8">
<div class="card-body">
<h4 class="card-title">${pokemon.id}. ${pokemon.name}</h4>

<p class="card-text">Ability: ${pokemon.abilities[0].ability.name} </p>

<p class="card-text">Moves: ${pokemon.moves[0].move.name} </p>

<p class="card-text"> weight: ${pokemon.weight}</p>
</div>
</div>
</div>
</div>`
element.innerHTML=tags;
container.appendChild(element)
}