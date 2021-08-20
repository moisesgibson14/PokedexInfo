import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {PokemonFull} from '../interfaces/PokemonInferfaces';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull | []>();

  const loadPokemon = async () => {
    const res = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);
  return {
    isLoading,
    pokemon,
  };
};
