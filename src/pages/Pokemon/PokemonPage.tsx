import { PokedexRepository } from "@/modules/Pokedex/domain/PokedexRepository";
import { QueryClient } from "@tanstack/react-query";

export async function loader(repository: PokedexRepository, queryClient: QueryClient) : Promise<any> {
    
    
    return null;
}


const PokemonPage = (props : any) => {

    console.log('Props:', props);

    return (
        <div>
            Hola 
        </div>
    );
};

export default PokemonPage;