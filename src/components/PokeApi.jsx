import React from "react";
import { useState, useEffect } from "react";
import LoadPokemon from "./LoadPokemon";
import PokemonSpecs from "./PokemonSpecs";
import SearchPokemon from "./SearchPokemon";

import "../stylesheets/PokeApi.css";

function PokeApi() {
  // Lista de Pokemons y caracteristicas individuales
  const [pokemons, setPokemons] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [specPokemon, setSpecPokemon] = useState({});
  const [loadSpecPokemon, setLoadSpecPokemon] = useState(false);

  //Busqueda por nombre de Pokemon
  const [buscar, setBuscar] = useState("");
  const [loadBuscar, setLoadBuscar] = useState(false);

  //Cargar mas pokemons en lista
  const [primerDato, setPrimerDato] = useState(1);
  const [segundoDato, setSegundoDato] = useState(13);

  useEffect(() => {
    pokemonData();
  }, []);

  async function pokemonData() {
    for (let i = primerDato; i < segundoDato; i++) {
      const responseData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i}`
      );
      const responseJsonData = await responseData.json();
      setPokemons((pokemons) => [...pokemons, responseJsonData]);
    }

    setPrimerDato(segundoDato);
    setSegundoDato(segundoDato + 10);

    setLoaded(true);
  }

  function handleData(dataPokemon) {
    setSpecPokemon(dataPokemon);

    setLoadSpecPokemon(true);
  }

  function handleBack(back) {
    setLoadSpecPokemon(back);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick() {
    if (buscar == "") {
      let error = document.querySelector(".error");
      let searchContainer = document.querySelector(".searchContainer");

      searchContainer.style.height = "100px";
      error.style.visibility = "visible";
    } else {
      setLoadBuscar(true);
    }
  }

  function ListLoaded() {
    return (
      <div className="container">
        {loaded ? (
          <div className="pokemonsContainer">
            <LoadPokemon listData={pokemons} pokemonData={handleData} />
            <button className="btnCargarMas" onClick={pokemonData}>
              Cargar mas
            </button>
          </div>
        ) : (
          <h1 className="cargando">Cargando...</h1>
        )}
      </div>
    );
  }

  function LoadPrincipal() {
    return (
      <div>
        {loadSpecPokemon ? (
          <PokemonSpecs specPokemon={specPokemon} backToList={handleBack} />
        ) : (
          <ListLoaded />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="searchContainer">
        <form className="formContainer" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setBuscar(e.target.value)}
            value={buscar}
          />
          <button onClick={handleClick}>Buscar</button>
        </form>
        <p className="error" style={{ visibility: "hidden" }}>
          Escribe el nombre de un pokemon
        </p>
      </div>
      {loadBuscar ? (
        <SearchPokemon buscarPokemon={buscar} backToList={handleBack} />
      ) : (
        <LoadPrincipal />
      )}
    </div>
  );
}

export default PokeApi;
