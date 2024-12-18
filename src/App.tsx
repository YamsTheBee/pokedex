import type React from "react";
import PokemonCard from "./components/PokemonCard";

const App: React.FC = () => {
	const pokemonList = [
		{
			name: "Bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "Charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			name: "Squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
	];

	const selectedPokemon = pokemonList[0];

	return (
		<div>
			<PokemonCard pokemon={selectedPokemon} />
		</div>
	);
};

export default App;
