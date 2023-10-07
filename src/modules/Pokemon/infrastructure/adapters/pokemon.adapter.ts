import { getItemFromURL } from "@/api/items/itemsApi";
import { getPokemonFromURL } from "@/api/pokemon/pokemonApi";
import { regionMapFromGenerationData } from "@/helpers/utils";
import { DetalleEvolucion, GeneroPokemon, HabilidadPokemon, ItemEvolution, Pokemon, PokemonEvolutions, TiempoDelDia } from "@/models/Pokedex.types";
import { GenerationDataResponse, PokemonApiResponse } from "@/modules/Pokedex/domain/PokeApiPokedex.types";
import { transformaPokedexPokemon } from "@/modules/Pokedex/infrastructure/adapters/pokedex.adapter";
import { Ability, EvoChain, EvolutionDetail, PokeApiEvolutionChain, PokeApiItem, PokemonSpecies } from "../../domain/PokeApiPokemon.types";

interface transformaPokedexPokemonAPIProps {
    datosPokemon: PokemonApiResponse;
    habilidades: Ability[];
    datosPokemonSpecies: PokemonSpecies;
    datosGeneracion: GenerationDataResponse;
    prevAndNext: {
        pokemonPrev: PokemonApiResponse;
        pokemonNext: PokemonApiResponse;
    },
    datosEvolucion: PokeApiEvolutionChain | null;
}

export const transformaPokemonFromAPI = async ({datosPokemon, habilidades, datosPokemonSpecies, datosGeneracion, prevAndNext, datosEvolucion} : transformaPokedexPokemonAPIProps) : Promise<Pokemon> => {

    let regionMap = regionMapFromGenerationData(datosGeneracion);

    let pokemon = transformaPokedexPokemon(datosPokemon, regionMap);

    let habilidadesPokemon = transformaHabilidadesPokemon(habilidades, datosPokemon);

    let descripcionPokedex = transformaDescripcionPokedex(datosPokemonSpecies);

    let evoluciones = datosEvolucion ? await obtenerEvoluciones(datosEvolucion.chain) : null;

    return {
        ...pokemon,
        descripcionPokedex: descripcionPokedex,
        habilidades: habilidadesPokemon,
        pokemonNext: transformaPokedexPokemon(prevAndNext.pokemonNext, regionMap),
        pokemonPrev: transformaPokedexPokemon(prevAndNext.pokemonPrev, regionMap),
        evoluciones: evoluciones
    };
    
}

export const transformaHabilidadesPokemon = (habilidades: Ability[], datosPokemon: PokemonApiResponse) : HabilidadPokemon[] => {


    let devolver : HabilidadPokemon[] = [];
    
    habilidades.forEach(habilidad => {

        let nombreHabilidad = habilidad.names.find(nombre => nombre.language.name === "es");

        if (nombreHabilidad)
        {

            let pokeApiAbility = datosPokemon.abilities.find(ability => ability.ability.name === habilidad.name);

            let descripcionesHabilidadSpanish = habilidad.flavor_text_entries.filter(text => text.language.name === "es");
    
            let descripcion = null;

            if (descripcionesHabilidadSpanish.length > 0)
            {
                descripcion = descripcionesHabilidadSpanish[descripcionesHabilidadSpanish.length - 1];
            }

            devolver.push({
                nombre: nombreHabilidad.name,
                oculta: pokeApiAbility?.is_hidden ?? false,
                descripcion: descripcion?.flavor_text.replaceAll('\n', ' ') ?? ''
                
            })
        }

        

    });

    return devolver;

}

export const transformaDescripcionPokedex = (datosPokemonSpecies: PokemonSpecies) => {
    
    let descripcionPokedex = null;

    let descripcionesSpanish = datosPokemonSpecies.flavor_text_entries.filter(desc => desc.language.name === "es");

    if (descripcionesSpanish.length > 0)
    {
        let ultimaDesc = descripcionesSpanish[descripcionesSpanish.length - 1];

        descripcionPokedex = {
            descripcion: ultimaDesc.flavor_text.replaceAll('\n', ' '),
            version: ultimaDesc.version.name
        }
    }

    return descripcionPokedex;
}

async function obtenerEvoluciones(nodo : EvoChain) : Promise<PokemonEvolutions> {

    let datosEvolucion = await getPokemonFromURL(nodo.species.url.replace('pokemon-species', 'pokemon'));

    let detallesEvolucion = nodo.evolution_details.pop();

    const evoluciones = await Promise.all(nodo.evolves_to.map(obtenerEvoluciones));


    return {
        nombre: nodo.species.name,
        detallesEvolucion: detallesEvolucion ? await obtenerDetalleEvolucion(detallesEvolucion) : null,
        imagen: datosEvolucion.sprites.other?.['official-artwork'].front_default || null,
        evoluciona: evoluciones.length > 0 ? evoluciones : null
    };
}


async function obtenerItem(url: string) {

    let datosItem = await getItemFromURL(url);

    return transformaItemToEvolutionItem(datosItem);

}

async function obtenerDetalleEvolucion(detallesEvolucion? : EvolutionDetail) : Promise<DetalleEvolucion> {
    

    return {
        nivel: detallesEvolucion?.min_level || null,
        genero: parseGenero(detallesEvolucion?.gender),
        felicidad: detallesEvolucion?.min_happiness || null,
        tiempoDelDia: parseTiempoDia(detallesEvolucion?.time_of_day),
        item: detallesEvolucion?.item ? await obtenerItem(detallesEvolucion.item.url) : null,
        portandoItem: detallesEvolucion?.held_item ? await obtenerItem(detallesEvolucion.held_item.url) : null,
        tipoEvolucion: transformaPropiedadTipoEvolucion(detallesEvolucion)
    };
}

export const transformaPropiedadTipoEvolucion = (detallesEvolucion? : EvolutionDetail) => {

    let devolver = null;

    if (detallesEvolucion)
    {
        let trigger = detallesEvolucion.trigger.name;

        switch (trigger)
        {
            case 'three-critical-hits':
                devolver = 'Asestar 3 golpes críticos en un mismo combate';
                break;
            case 'level-up':
                devolver = 'Subir de nivel';
                break;
            case 'trade':
                devolver = 'Intercambio'
                break;
            case 'use-item':
                devolver = 'Usando item'
                break;
            case 'shed':
                devolver = 'Si hay espacio en el equipo y teniendo una Poké Ball'
                break;
            case 'spin':
                devolver = 'Girar al jugador';
                break;
            case 'tower-of-darkness':
                devolver = 'En la Torre de las Sombras'
                break;
            case 'tower-of-waters':
                devolver = 'En la Torre de las Aguas'
                break;
            case 'take-damage':
                devolver = 'Recibiendo daño'
                break;
            case 'other':
                devolver = 'Otro';
                break;
            case 'agile-style-move':
                devolver = 'Usando ataques de estilo rápido'
                break;
            case 'strong-style-move':
                devolver = 'Usando ataques de estilo fuerte'
                break;
            case 'recoil-damage':
                devolver = 'Perder vida con daño de retroceso'
                break;
        }

    }

    return devolver;
}

export const parseTiempoDia = (tiempoDia?: string) => {

    let devolver: TiempoDelDia | null = null;

    if (tiempoDia)
    {
        devolver = tiempoDia === 'night' ? 'noche' : 'día';
    }

    return devolver;
}

export const parseGenero = (gender?: number | null) => {

    let genero: GeneroPokemon | null = null;

    if (gender)
    {
        genero = gender === 1 ? 'hembra' : 'macho';
    }

    return genero;
}

export const transformaItemToEvolutionItem = (item: PokeApiItem) => {

    let devolver : ItemEvolution = {
        nombre: '',
        imagen: null
    }

    let nombreSpanish = item.names.find(name => name.language.name === "es");

    if (nombreSpanish)
    {
        devolver.nombre = nombreSpanish.name;

        devolver.imagen = item.sprites.default;
    }

    return devolver;
}