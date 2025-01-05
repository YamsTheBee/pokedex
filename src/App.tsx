//import type React from "react";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

//const App: React.FC = () => {

// ma liste de pokemon
const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	//const selectedPokemon = pokemonList[0];
	const [pokemonIndex, setPokemonIndex] = useState(0);

	return (
		<div>
			<h1>Pokedex</h1>
			<nav>
				{pokemonList.map((pokemon, index) => (
					<button
						key={pokemon.name}
						type="button"
						onClick={() => setPokemonIndex(index)}
					>
						{pokemon.name}
					</button>
				))}
			</nav>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</div>
	);
}

export default App;
