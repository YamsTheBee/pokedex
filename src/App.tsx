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

	const handlePrevClick = () => {
		setPokemonIndex(
			(prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length,
		);
	};

	const handleNextClick = () => {
		setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
	};

	return (
		<div>
			<h1>Pokedex</h1>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			<div>
				<button type="button" onClick={handlePrevClick}>
					Précédent
				</button>
				<button type="button" onClick={handleNextClick}>
					Suivant
				</button>
			</div>
		</div>
	);
}

export default App;
