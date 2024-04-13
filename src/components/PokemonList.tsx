import { FC, useEffect, useState } from "react";
import { useGetPokemonByNameQuery } from "../store/features/api/pokemonApi.ts";
import { Card, CardSection } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type AppProps = {
  name: string;
};

const PokemonList: FC<AppProps> = ({ name }) => {
  const nav = useNavigate();
  const { data } = useGetPokemonByNameQuery(name);
  const [pokemon, serPokemon] = useState(Object);
  useEffect(() => {
    if (data) {
      serPokemon(data);
    }
  }, [data]);
  return (
    <Card
      onClick={() => nav(`details/${name}`)}
      className="bg-blue-500 p-2 rounded-2xl cursor-pointer"
    >
      <CardSection>
        <img
          className="block h-52 w-52"
          src={
            pokemon.sprites?.other?.dream_world?.front_default ||
            pokemon.sprites?.other?.["official-artwork"]?.front_default ||
            pokemon.sprites?.front_default
          }
          alt="pokemon"
        />
      </CardSection>
      <CardSection>
        <p className="text-3xl text-center">{pokemon.name}</p>
      </CardSection>
    </Card>
  );
};

export default PokemonList;
