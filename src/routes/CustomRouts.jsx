import { Route, Routes } from "react-router-dom";
import Pokedex from "../Componants/Pokedex/Pokedex";
import PokemoDetails from "../Componants/PokemonDetails/PokemonDetails";


function CustomRouts(){
  return (
    <Routes>
        <Route  path="/" element={<Pokedex/>}/>
        <Route  path="/pokemon/:id" element={<PokemoDetails />}/>
    </Routes>
  )

}

export default CustomRouts;