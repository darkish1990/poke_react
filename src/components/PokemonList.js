import React from "react";
import "./PokemonList.css";
export const PokemonList = ({ pokemon }) => {

  return (
    <div>
      {pokemon.map(p => (
        <div className="pokemon-container" key={p.name}>
          <div className="pokemon">
            <div>Name: {p.name}</div>
            <div>Height: {p.height}</div>
            <div>ID:{p.id}</div>
            <div className="pokemonlist-img-container">
              <img src={p.pic} alt="" />
              <img src={p.backPic} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
