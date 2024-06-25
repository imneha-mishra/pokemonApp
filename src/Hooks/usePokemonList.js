import { useEffect, useState } from "react"
import axios from "axios"

function usePokemonlist(url){
    const [pokemonlistState,setPokemonlistState]=useState({
        pokemonList:[],
        isLoading:true,
        pokedexurl:url,
        nexturl:"", 
        prevurl:""
    })
    async function downloadPokemon(){
   setPokemonlistState(() =>({...pokemonlistState,isLoading:true}))
        const response=await axios.get(pokemonlistState.pokedexurl)

        const pokemonresuts= response.data.results;
         console.log(pokemonresuts)
         
               setPokemonlistState((state)=>({
                ...state,
                nexturl:response.data.next,
                prevurl:response.data.previous
            }))
              
        const pokemonresutsPromise=pokemonresuts.map((pokemon) => axios.get(pokemon.url))
    
        const pokemonData= await axios.all(pokemonresutsPromise);
        console.log(pokemonData)

        const res=pokemonData.map((pokeData)=>{

            const pokemon=pokeData.data;
           console.log(pokemon)
            return {
                  id:pokemon.id,
                  name:pokemon.name, 
                 image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.
                 front_default : pokemon.sprites.front_shiny,
                types:pokemon.types
            }
        })
        console.log(res)
        setPokemonlistState((state)=>({...state,pokemonList:res,isLoading:false}))
        
     }
     useEffect (()=>{
        downloadPokemon();
     },[pokemonlistState.pokedexurl])
    return {pokemonlistState,setPokemonlistState}
    

}
export default usePokemonlist;