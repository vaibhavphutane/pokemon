import logo from "../src/assets/logo.png";
import "./App.css";
import Pokemon from "./pokemon";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const color = "#2e4595";

  const getPokeData = async () => {
    setIsLoading(true);
    let pokes = [];
    const fetchedPokemons = await fetch(url).then((res) => res.json());
    for (const pokemon of fetchedPokemons.results) {
      const poke = await fetch(pokemon.url).then((res) => res.json());
      const pokeChar = {
        name: poke.name,
        imageUrl: poke.sprites.front_default,
        ability: poke.abilities[0].ability.name,
      };
      pokes.push(pokeChar);
    }
    setPokemons(pokes);
    setIsLoading(false);
  };
  
  useEffect(() => {
    getPokeData();
  }, [url]);

  return (
    <div className="app">
      <div>
        <header className="header">
          <img src={logo} className="logo" />
        </header>
      </div>
      {!isLoading ? (
        <div className="carousel-conatiner">
          <Pokemon pokemons={pokemons} />
        </div>
      ) : (
        <div className="loader-container">
          <RingLoader color={color} loading={isLoading} />
        </div>
      )}
    </div>
  );
}

export default App;
