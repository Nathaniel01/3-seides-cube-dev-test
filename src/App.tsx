import React, { useState, useEffect } from 'react';
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchData } from './services/utils';
import { Pokemon, } from './components/Pokemon';
import { Alert, Button, Card, Nav } from 'react-bootstrap';
import Navigation from './components/Navigation';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [pokemon, setPokemon] = useState<any[]>([])
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [savedPokemon, setSavedPokemon] = useLocalStorage("saved_pokemon", [])


  const getPokemon = async (searchString: string) => {
    try {
      setisLoading(true)
      const res = await fetchData(searchString)
      if (!res) return;
      const found = pokemon.some(el => el.name === res.name)
      if (!found) setPokemon([res, ...pokemon]);
      setisLoading(false)
    }
    catch (e) {
      console.log(e)
    }
  }

  const savePokemon = (pokemon: any) => {
    setPokemon(pokemon.name)
  }

  const getSavedPokemon = (pokemon: any) => {
    const data = window.localStorage.getItem(pokemon.name)
    const parsed_data = JSON.parse(data!)
    return parsed_data
  }

  return (
    <div className="App">
      <Navigation getSavedPokemon={getSavedPokemon} />
      <Search getPokemon={getPokemon} />
      <Button style={{}} onClick={() => setPokemon([])}>Clear search</Button>
      {!isLoading && !!pokemon && pokemon.length > 0 &&
        pokemon?.map?.((_pokemon: any) => (
          <Pokemon
            key={_pokemon.name}
            name={_pokemon.name}
            sprites={_pokemon.sprites.front_default}
            abilities={_pokemon.abilities}
            stats={_pokemon.stats}
            types={_pokemon.types}
            savePokemon={savePokemon}
          />
        ))
      }
    </div>
  );
}

export default App;
