type PokemonProps = {
	pokemon: { name: string; imgScr?: string };
};

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
	return (
		<div>
			<h2>{pokemon.name}</h2>
			{pokemon.imgScr && <img src={pokemon.imgScr} alt={pokemon.name} />}
		</div>
	);
};

export default PokemonCard;
// const pokemon = { name: "mew", imgSrc: null };
// à nremplacer par la valeur du {0}
