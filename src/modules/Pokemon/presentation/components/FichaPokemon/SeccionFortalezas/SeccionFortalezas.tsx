import { TipoPokemon } from "@/models/Pokedex.types";
import { getTypeWeakness, typeWeaknessToArray } from "../../../helpers/pokemon.helper";
import PokemonTipoFortaleza from "./PokemonTipoFortaleza/PokemonTipoFortaleza";

interface SeccionFortalezasProps {
    tipos: TipoPokemon[]
}

const SeccionFortalezas = ({tipos} : SeccionFortalezasProps) => {

    let tiposString = [tipos[0].id];

    if (tipos.length > 1)
    {
        tiposString.push(tipos[1].id);
    }

    let datosTipo = getTypeWeakness(tiposString);

    let typeWeaknessArray = typeWeaknessToArray(datosTipo);


    return (
        <>
            <div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-wide">Fortalezas</h4>
                <PokemonTipoFortaleza data={typeWeaknessArray} show={'resistant'} />
            </div>
            <div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-wide">Debilidades</h4>
                <PokemonTipoFortaleza data={typeWeaknessArray} show={'weak'} />
            </div>
        </>
    )
}

export default SeccionFortalezas;