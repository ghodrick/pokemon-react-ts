import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/Tabs";
import { MovimientoPokemon, PokemonTypeVariants } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";
import MovimientosList from "./MovimientosList/MovimientosList";

interface MovimientosPokemonProps {
    movimientos: MovimientoPokemon[];
    type: PokemonTypeVariants;
}

const tabClasses = cva(
    ["flex gap-4 justify-start"],
    {
        variants: {
            type: {
                bug: 'bg-bicho-100 [&>button[data-state=active]]:bg-bicho-700 [&>button[data-state=active]]:text-bicho-50',
                dark: 'bg-siniestro-200 [&>button[data-state=active]]:bg-siniestro-700 [&>button[data-state=active]]:text-siniestro-50',
                dragon: 'bg-dragon-100 [&>button[data-state=active]]:bg-dragon-700 [&>button[data-state=active]]:text-dragon-50',
                electric: 'bg-electrico-100 [&>button[data-state=active]]:bg-electrico-500 [&>button[data-state=active]]:text-electrico-50',
                fairy: 'bg-hada-100 [&>button[data-state=active]]:bg-hada-700 [&>button[data-state=active]]:text-hada-50',
                fighting: 'bg-lucha-100 [&>button[data-state=active]]:bg-lucha-700 [&>button[data-state=active]]:text-lucha-50',
                fire: 'bg-fuego-100 [&>button[data-state=active]]:bg-fuego-700 [&>button[data-state=active]]:text-fuego-50',
                flying: 'bg-volador-100 [&>button[data-state=active]]:bg-volador-700 [&>button[data-state=active]]:text-volador-50',
                ghost: 'bg-fantasma-100 [&>button[data-state=active]]:bg-fantasma-700 [&>button[data-state=active]]:text-fantasma-50',
                grass: 'bg-planta-100 [&>button[data-state=active]]:bg-planta-700 [&>button[data-state=active]]:text-planta-50',
                ground: 'bg-tierra-100 [&>button[data-state=active]]:bg-tierra-700 [&>button[data-state=active]]:text-tierra-50',
                ice: 'bg-hielo-100 [&>button[data-state=active]]:bg-hielo-700 [&>button[data-state=active]]:text-hielo-50',
                normal: 'bg-normal-100 [&>button[data-state=active]]:bg-normal-700 [&>button[data-state=active]]:text-normal-50',
                poison: 'bg-veneno-100 [&>button[data-state=active]]:bg-veneno-700 [&>button[data-state=active]]:text-veneno-50',
                psychic: 'bg-psiquico-100 [&>button[data-state=active]]:bg-psiquico-700 [&>button[data-state=active]]:text-psiquico-50',
                rock: 'bg-roca-100 [&>button[data-state=active]]:bg-roca-700 [&>button[data-state=active]]:text-roca-50',
                steel: 'bg-acero-100 [&>button[data-state=active]]:bg-acero-700 [&>button[data-state=active]]:text-acero-50',
                water: 'bg-agua-100 [&>button[data-state=active]]:bg-agua-700 [&>button[data-state=active]]:text-agua-50',
            }
        },
    }
);
const MovimientosPokemon = ({ movimientos, type }: MovimientosPokemonProps) => {


    let movimientosNivel = movimientos.filter(movimiento => movimiento.metodoAprendizaje === 'nivel').sort((a, b) => a.nivel - b.nivel);

    let movimientosTutor = movimientos.filter(movimiento => movimiento.metodoAprendizaje === 'tutor').sort((a, b) => (a.tipo < b.tipo) ? -1 : (a.tipo > b.tipo) ? 1 : 0);

    let movimientosMT = movimientos.filter(movimiento => movimiento.metodoAprendizaje === 'MT').sort((a, b) => (a.tipo < b.tipo) ? -1 : (a.tipo > b.tipo) ? 1 : 0);;

    return (

        <Tabs defaultValue="nivel" className="mt-7">
            <TabsList className={tabClasses({ type })}>
                <TabsTrigger value="nivel">
                    Nivel
                </TabsTrigger>
                <TabsTrigger value="MT">
                    MT/MO
                </TabsTrigger>
                <TabsTrigger value="tutor">
                    Tutor
                </TabsTrigger>
            </TabsList>
            <TabsContent value="nivel">
                <MovimientosList movimientos={movimientosNivel} />
            </TabsContent>
            <TabsContent value="MT">
                <MovimientosList movimientos={movimientosMT} />
            </TabsContent>
            <TabsContent value="tutor">
                <MovimientosList movimientos={movimientosTutor} />
            </TabsContent>
        </Tabs>

    );
}

export default MovimientosPokemon;