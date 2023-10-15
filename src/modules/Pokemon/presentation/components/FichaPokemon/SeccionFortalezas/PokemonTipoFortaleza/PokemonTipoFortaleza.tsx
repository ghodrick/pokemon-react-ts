import { PokemonTypeEffectivenessObject } from "@/models/Pokedex.types";
import TagTipoFortaleza from "./TagTipoFortaleza/TagTipoFortaleza";

interface PokemonTipoFortalezaProps {
    data: PokemonTypeEffectivenessObject[],
    show: 'weak' | 'resistant'
}
const PokemonTipoFortaleza = ({data, show} : PokemonTipoFortalezaProps) => {


    let dataMostrar = data.filter(dato => show === 'resistant' ? dato.valor < 1 : dato.valor > 1);

    return (

        dataMostrar.length > 0
        ?
        (
            <div className="grid grid-cols-3 gap-4 mt-7">
                {
                    dataMostrar.map((data, index) => <TagTipoFortaleza key={`data_${data.tipo}_${index}`} data={data} />)
                }
            </div>
        )
        :
        (
            <div>
                <h4 className="text pt-4 tracking-wide">No hay efectos</h4>
            </div>
        )

    );

}

export default PokemonTipoFortaleza;