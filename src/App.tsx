import React, { useState, useEffect } from 'react';
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchData } from './services/utils';
import { Pokemon, } from './components/Pokemon';
import { Alert, Button, Card, Nav } from 'react-bootstrap';
import Navigation from './components/Navigation';

function App() {
  const [pokemon, setPokemon] = useState<any[]>([])
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [savedPokemon, setSavedPokemon] = useState<string[]>([])


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

  const savePokemon = (pokemon_name: string) => {
    console.log('pokemon', pokemon_name)
    setSavedPokemon([pokemon_name, ...savedPokemon]);
    localStorage.setItem('pokemon', JSON.stringify(savedPokemon))
    console.log("saved!!")
  }

  return (
    <div className="App">
      <Navigation getSavedPokemon={savedPokemon} />
      <Search getPokemon={getPokemon} savedPokemon={savedPokemon} />
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
