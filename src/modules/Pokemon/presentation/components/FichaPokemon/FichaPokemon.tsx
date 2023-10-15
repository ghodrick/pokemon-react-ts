import { Pokemon } from "@/models/Pokedex.types";
import PokemonCardStats from "@/modules/Pokedex/presentation/components/Pokedex/PokedexList/PokemonCard/PokemonCardStats/PokemonCardStats";
import CabeceraFichaPokemon from "./CabeceraFichaPokemon/CabeceraFichaPokemon";
import DescripcionPokemon from "./DescripcionPokemon/DescripcionPokemon";
import Evoluciones from "./Evoluciones/Evoluciones";
import MovimientosPokemon from "./MovimientosPokemon/MovimientosPokemon";
import SeccionFortalezas from "./SeccionFortalezas/SeccionFortalezas";

interface FichaPokemonProps {
    pokemon: Pokemon;
}
//
const FichaPokemon = ({pokemon} : FichaPokemonProps) => {


    return (
        <>
            <CabeceraFichaPokemon pokemon={pokemon} />
            <div className="bg-container/80 -mt-5 backdrop-blur-md rounded-t-2xl rounded-b-xl">
                
                <section className="grid grid-cols-2 min-h-[250px] p-7 gap-12">
                    <div>
                        <h4 className="text-2xl font-bold tracking-wide">Descripción</h4>
                        <DescripcionPokemon pokemon={pokemon} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold tracking-wide">Estadísticas</h4>
                        <PokemonCardStats type={pokemon.tipos[0].id} size='md' stats={pokemon.estadisticas} />
                    </div>
                </section>

                <section className="grid grid-cols-2 min-h-[250px] p-7 gap-12">
                    <SeccionFortalezas tipos={pokemon.tipos} />
                </section>

                <section className="flex flex-col p-7">
                    <h4 className="text-2xl font-bold tracking-wide">Movimientos</h4>
                    <MovimientosPokemon movimientos={pokemon.movimientos} type={pokemon.tipos[0].id} />
                </section>

                <section className="bg-gradient-to-t from-slate-700/90 to-slate-900 min-h-[250px] flex flex-col p-7 text-container">
                    <h4 className="text-2xl font-bold tracking-wide">Evoluciones</h4>
                    <Evoluciones data={pokemon.evoluciones} />
                </section>
            </div>
        </>
    )

}

export default FichaPokemon;