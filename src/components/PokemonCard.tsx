import type React from "react";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface PokemonCardProps {
	pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
	return (
		<div className="pokemon-card">
			<img
    	src={pokemon.imgSrc}
		alt= {pokemon.name}
		className="Pokemon-image"
			/>

			<h2>{pokemon.name}</h2>
		</div>
	);
};

export default PokemonCard;
