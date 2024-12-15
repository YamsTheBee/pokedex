import type  React from "react";
import PokemonCard from "./components/PokemonCard";

const App: React.FC = () => {
	return (
		<div>
			<PokemonCard pokemon={{ name: "bulbasaur", imgScr: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" }} />
		</div>
	);
};

export default App;
