import type React from "react";

interface pokemon {
	name: string;
	imgSrc?: string;
}

interface PokemonCardProps {
	pokemon: pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
	return (
		<div className="pokemon-card">
			<img
				src={pokemon.imgSrc || "https://via.placeholder.com/150"}
				alt={pokemon.name}
				className="pokemon-image"
			/>

			<h2>{pokemon.name}</h2>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<PokemonCard
				pokemon={{
					name: "Pikachu",
					imgSrc:
						"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
				}}
			/>

			<PokemonCard
				pokemon={{
					name: "Bulbasaur",
				}}
			/>
		</div>
	);
};
export default App;
