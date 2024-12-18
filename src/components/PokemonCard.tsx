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

export default PokemonCard;
