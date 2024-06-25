import { useEffect, useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import './pokedex.css'

function Pokedex(){

    const [searchterm,setSearchterm]=useState("")
    useEffect(()=>{

    },[searchterm])
    return(

<div className="pokedex"> 

           <Search updateSearchterm={setSearchterm}/>
           
           { (!searchterm) ? <PokemonList /> : <PokemonDetails key={searchterm} pokemonName={searchterm} />}
</div>
    )
}
export default Pokedex;