const form = document.querySelector("form");
const button = document.querySelector("button")
const inp = document.querySelector(".inp")
const heroesContainer = document.querySelector(".heroes");

let valueinp;
inp.addEventListener("keyup",inputValue)
function inputValue(e){
  valueinp = e.target.value;
}


button.addEventListener("click",getSuperHeroes);
function getSuperHeroes(e){
e.preventDefault();
fetch(`https://superhero-search.p.rapidapi.com/api/?hero=${valueinp}`,{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5fe34a70dbmshe8217f16b6a8b85p14ef6bjsnd97c8c3a11f4',
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
}})
.then(res => res.json())
.then(data => {
	console.log(data);
		heroesContainer.innerHTML = `
		<img src=${data.images.lg} alt="" />
		<div class="heroes-txt">
		<h1>${data.name}</h1>
		<p><span>Combat</span><span>${data.powerstats.combat}</span></p>
		<p><span>Durability</span><span>${data.powerstats.durability}</span></p>
		<p><span>Intelligence</span><span>${data.powerstats.intelligence}</span></p>
		<p><span>Power</span><span>${data.powerstats.power}</span></p>
		<p><span>Speed</span><span>${data.powerstats.speed}</span></p>
		<p><span>Strength</span><span>${data.powerstats.strength}</span></p>
		</div>
		`;
})
}