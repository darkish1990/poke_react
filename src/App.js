import React, { useState, useEffect } from "react";
import { PokemonList } from "./components/PokemonList";
import axios from "axios";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = React.useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onload = async () => {
      setPokemon([]);
      setLoading(true);
      const { data } = await axios.get(currentPageUrl);
      setLoading(false);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);

      data.results.forEach(async pokemon => {
        const p = await axios.get(pokemon.url);
        setPokemon(prev => [
          ...prev,
          {
            name: p.data.name,
            pic: p.data.sprites.front_default,
            backPic: p.data.sprites.back_default,
            id: p.data.id,
            height:p.data.height
          }
        ]);
      });
    };
    onload();
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPreviousPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <div className="container">
        <PokemonList pokemon={pokemon} />
        <Pagination
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPreviousPage={prevPageUrl ? goToPreviousPage : null}
        />
      </div>
    </>
  );
}

export default App;
