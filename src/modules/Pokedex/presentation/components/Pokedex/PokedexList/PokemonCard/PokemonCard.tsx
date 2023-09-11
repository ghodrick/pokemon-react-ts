
import TipoPokemon from "@/components/pokemon/TipoPokemon";
import PokemonCardStats from "./PokemonCardStats/PokemonCardStats";
import { capitalize } from "@/helpers/string.helper";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { ImagenPokemonType } from "@/modules/Pokedex/presentation/models/types";

interface PokemonCardProps {
    pokemon: PokedexPokemon;
    tipoImagen?: ImagenPokemonType;
}

const PokemonCard = ({pokemon, tipoImagen = 'normal'} : PokemonCardProps) => {

    let imagenUsar = tipoImagen === 'normal' ? pokemon.imagen.normal : pokemon.imagen.shiny;

    return ( 
        <div className={'flex flex-col bg-card rounded-lg py-4 space-y-2 overflow-hidden shadow-xl shadow-neutral-200 px-4'}>
            <div className="flex justify-center relative">
                <div className="w-52 h-52">
                    <img src={imagenUsar} alt={pokemon.nombre} className="select-none" />
                </div>
                <span className="absolute right-1 font-semibold text-neutral-foreground-dark">Nº {pokemon.numero}</span>
            </div>
            <div className="space-y-3">
                <h3 className="text-center font-bold text-card-foreground">{capitalize(pokemon.nombre)}</h3>
                <div className="flex gap-2 justify-center">
                    {
                        pokemon.tipos.map((tipo) => <TipoPokemon key={`tipo_${pokemon.id}_${tipo.id}`} type={tipo} />)
                    }
                </div>
             
                <PokemonCardStats stats={pokemon.estadisticas} />
              
            </div>
        </div>
     );
}
 
export default PokemonCard;