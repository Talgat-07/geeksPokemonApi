import { useGetAllPokemonQuery } from "../../store/features/api/pokemonApi.ts";
import PokemonList from "../../components/PokemonList.tsx";

const HomePage = () => {
  const { data } = useGetAllPokemonQuery();
  return (
    <div className="max-w-7xl m-auto p-4 flex gap-5 flex-wrap">
      {data?.results
        ? data.results.map((el) => <PokemonList key={el.name} name={el.name} />)
        : ""}
    </div>
  );
};

export default HomePage;
