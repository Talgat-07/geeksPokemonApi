import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../store/features/api/pokemonApi.ts";
import { useEffect, useState } from "react";
import { Card, CardSection } from "@mantine/core";

const DetailsPage = () => {
  const name = useParams();
  const { data } = useGetPokemonByNameQuery(`${name?.name}`);
  const [pokemon, serPokemon] = useState(Object);
  useEffect(() => {
    if (data) {
      serPokemon(data);
    }
  }, [data]);
  return (
    <Card className="bg-blue-500 max-w-2xl m-auto my-10 p-2 rounded-2xl">
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

export default DetailsPage;
