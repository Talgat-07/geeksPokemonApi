import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon/" }),
  endpoints: (build) => ({
    getAllPokemon: build.query<
      { results: Array<{ url: string; name: string }> },
      void
    >({
      query: () => "",
    }),
    getPokemonByName: build.query<Object, string>({
      query: (name) => name,
    }),
  }),
});
export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = pokemonApi;
