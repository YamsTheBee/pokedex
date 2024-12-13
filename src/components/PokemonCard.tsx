
function PokemonCard(props: { pokemon: { name: string; imgScr?: string } }) {
	// ceci permet d'afficher l'objet props dans la console
	console.log(props);
	const pokemon = props.pokemon; // Accèder au Pokémon via props

	return (
		<div className="pokemonCard">
			<figure>
				{pokemon.imgScr ? (
					<img src={pokemon.imgScr} alt={pokemon.name} />
				) : (
					<p>??? </p>
				)}
				<figcaption> {pokemon.name} </figcaption>
			</figure>
		</div>
	);
}

export default PokemonCard;
