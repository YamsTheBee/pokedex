
import "./App.css";

import PokemonCard from "./components/PokemonCard";
import type React from 'react';

const App: React.FC = () => {

function App() {
	return (
		<div>
			<PokemonCard
				name="bulbasaur"
				imgScr="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
			/>
		</div>
	);
}

export default App;
