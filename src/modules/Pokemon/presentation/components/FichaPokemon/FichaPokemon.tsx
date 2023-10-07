import { Pokemon } from "@/models/Pokedex.types";
import CabeceraFichaPokemon from "./CabeceraFichaPokemon/CabeceraFichaPokemon";
import Evoluciones from "./Evoluciones/Evoluciones";

interface FichaPokemonProps {
    pokemon: Pokemon;
}
//
const FichaPokemon = ({pokemon} : FichaPokemonProps) => {

    console.log(pokemon)

    return (
        <>
            <CabeceraFichaPokemon pokemon={pokemon} />
            <div className="bg-container/80 -mt-5 backdrop-blur-md rounded-t-2xl rounded-b-xl overflow-hidden">
                <section className="bg-slate-800/90 min-h-[250px] flex flex-col p-7 text-white text-2xl font-bold tracking-wide">
                    <h4>Evoluciones</h4>
                    <Evoluciones data={pokemon.evoluciones} />
                </section>
                <section className="grid grid-cols-2 min-h-[250px]">
                    <div>
                        Izq
                    </div>
                    <div>
                        dcha
                    </div>
                </section>
            </div>
        </>
    )

}

export default FichaPokemon;