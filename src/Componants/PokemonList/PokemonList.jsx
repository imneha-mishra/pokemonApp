
import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css'
import usePokemonlist from "../../Hooks/usePokemonList";
function PokemonList(){
   
    const {pokemonlistState,setPokemonlistState}= usePokemonlist("https://pokeapi.co/api/v2/pokemon")
    
   
    
    return (
         <div className="pokemon-list-wrap">

         <div></div>
         <div className="pokemon-wraper">
         {(pokemonlistState.isLoading)?'Loading....' :
          pokemonlistState.pokemonList.map((p) =>
          <Pokemon name={p.name} 
         image={p.image} key={p.id}
                     id={p.id} />)}
              </div>
              <div className="controls">
                <button disabled={pokemonlistState.prevurl == null} onClick={(()=>{
                  const urltoset=pokemonlistState.prevurl
                setPokemonlistState({...pokemonlistState,pokedexurl:urltoset})})

                }>Prev</button>
                <button disabled={pokemonlistState.nexturl == null} onClick={(()=> {
                      const urltoset=pokemonlistState.nexturl
                    setPokemonlistState({...pokemonlistState,pokedexurl:urltoset,})})
}>next</button>
              </div>
         </div>
    )

}
export default PokemonList;