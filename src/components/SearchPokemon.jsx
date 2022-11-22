import PokemonSpecs from "./PokemonSpecs";
import { useState, useEffect } from "react";

function SearchPokemon ({buscarPokemon}) {

    const [searchPokemon, setSearchPokemon] = useState([]);
    const [buscar, setBuscar] = useState(buscarPokemon);
    const [loadBuscar, setLoadBuscar] = useState(false);
    
    const [loadSpecPokemon, setLoadSpecPokemon] = useState (false);

    useEffect(() => {

        loadPokemon();
        
    }, []);

    async function loadPokemon () {

            const responseData = await fetch (`https://pokeapi.co/api/v2/pokemon/${buscar}`);
            const responseJsonData = await responseData.json();
    
            setSearchPokemon(responseJsonData);
    
            setLoadBuscar(true);

    }

    function handleBack (back) {
        
        setLoadSpecPokemon(back)

    }

    return (

        <div>
            {
                loadBuscar ? <PokemonSpecs specPokemon={searchPokemon} backToList={handleBack} /> :
                <h1>Cargando...</h1>
            }
            
        </div>
    );

}

export default SearchPokemon;