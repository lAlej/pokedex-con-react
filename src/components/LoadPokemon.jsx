
import { type } from "@testing-library/user-event/dist/type";
import { useState} from "react";

import "../stylesheets/LoadPokemon.css";
import "../stylesheets/responsive/LoadPokemonResponsive.css"

function LoadPokemon ({listData, pokemonData}) {

    const [pokemons, setPokemons] = useState(listData);

    const tipos= [
        {name: "steel",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/d/d9/latest/20191118232245/Tipo_acero.gif"},
        {name: "water",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/9/94/latest/20191118232235/Tipo_agua.gif"},
        {name: "bug",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/f/fe/latest/20191118232226/Tipo_bicho.gif"},
        {name: "dragon",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20170114100154/Tipo_drag%C3%B3n.gif"},
        {name: "electric",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/1/1b/latest/20170114100155/Tipo_el%C3%A9ctrico.gif"},
        {name: "ghost",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/4/47/latest/20170114100329/Tipo_fantasma.gif"},
        {name: "fire",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/c/ce/latest/20170114100331/Tipo_fuego.gif"},
        {name: "fairy",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/b/bc/latest/20170114100332/Tipo_hada.gif"},
        {name: "ice",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20170114100333/Tipo_hielo.gif"},
        {name: "fighting",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/b/b7/latest/20170114100336/Tipo_lucha.gif"},
        {name: "normal",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20170114100442/Tipo_normal.gif"},
        {name: "grass",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/d/d6/latest/20170114100444/Tipo_planta.gif"},
        {name: "psychic",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20170114100445/Tipo_ps%C3%ADquico.gif"},
        {name: "rock",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20170114100446/Tipo_roca.gif"},
        {name: "dark",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20191118232327/Tipo_siniestro.gif"},
        {name: "ground",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/1/1d/latest/20191118232216/Tipo_tierra.gif"},
        {name: "poison",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/1/10/latest/20191118232220/Tipo_veneno.gif"},
        {name: "flying",
        url: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e1/latest/20191118232224/Tipo_volador.gif"},
    ];


    function handleSubmit (e) {

        e.preventDefault()
    }

    return(
        <div className="pokemonContainer">
            { 

                pokemons.map((item, index) => (

                    <form className="pokemonSpecs" key={index} onSubmit={handleSubmit}>
                        <h1 className="specName" >{item.name.toUpperCase()}</h1>
                        <div className="specType">
                            {item.types.map((type, index) => (
                                
                                tipos.map((tipo, index) => (
                                    // console.log(tipo.color)
                                    tipo.name === type.type.name
                                    ? <img className="specTypeImg" src={tipo.url} alt={tipo.name} key={index} />
                                    : console.log("?")
                                ))
                                   
                            ))}

                        </div>
                        <img className="specSprite" src={item.sprites.other["official-artwork"].front_default} alt="" />
                        <button className="specButton" onClick={() => {pokemonData(item)}}>Mas Info...</button>
                    </form>
                )) 
                
            }
        </div>

        
    );
}

export default LoadPokemon;