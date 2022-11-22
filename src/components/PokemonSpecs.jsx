import { useState } from "react";

import "../stylesheets/PokemonSpecs.css";
import "../stylesheets/responsive/PokemonSpecsResponsive.css"


function PokemonSpecs ({specPokemon, backToList}) {

    const [back, setBack] = useState (true); 

    function handleBack() {
        setBack(false)
        backToList(back)
    }

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

    return(
        <form className="container">
            <div className="btnContainer">
                    <button className="btnBack" onClick={handleBack} >Volver</button>

            </div>
            <div className="specContainer">

                <h1 className="specName">{specPokemon.name.toUpperCase()}</h1>

                <div className="specPokemon">

                    <div>

                        <img className="specImg" src={specPokemon.sprites.other["official-artwork"].front_default} alt="" />

                    </div>

                    <div>

                        <div className="specTypeContainer">
                                {specPokemon.types.map((type, index) => (
                                    
                                    tipos.map((tipo, index) => (
                                        // console.log(tipo.color)
                                        tipo.name === type.type.name
                                        ? <img className="specTypeImg" src={tipo.url} alt={tipo.name} key={index} />
                                        : console.log("?")
                                    ))
                                    
                                ))}

                            </div>
                    
                        <div className="specStats">

                            <div className="specAP">

                                <p>ALTURA: {specPokemon.height / 10 + " m" } </p>
                                <p>PESO: {specPokemon.weight / 10 + " kg" }</p>

                            </div>

                            <div className="specBaseStats">

                                <div>
                                    <p>HP: {specPokemon.stats[0].base_stat} / 250</p>

                                    <p>ATAQUE: {specPokemon.stats[1].base_stat} / 250</p>

                                    <p>DEFENSA: {specPokemon.stats[2].base_stat} / 250</p>

                                    <p>ATAQUE.ESP: {specPokemon.stats[3].base_stat} / 250</p>

                                    <p>DEFENSA.ESP: {specPokemon.stats[4].base_stat} / 250</p>

                                    <p>VELOCIDAD: {specPokemon.stats[5].base_stat} / 250 </p>
                                    
                                </div>
                                <div>
                                    <progress max={255} value={specPokemon.stats[0].base_stat} /> 

                                    <progress max={255} value={specPokemon.stats[1].base_stat} />

                                    <progress max={255} value={specPokemon.stats[2].base_stat} />

                                    <progress max={255} value={specPokemon.stats[3].base_stat} />

                                    <progress max={255} value={specPokemon.stats[4].base_stat} />

                                    <progress max={255} value={specPokemon.stats[5].base_stat} />
                                    
                                </div>

                                

                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </form>
    );
}

export default PokemonSpecs;