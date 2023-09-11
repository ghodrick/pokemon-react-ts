export interface GenerationListResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  GenerationResults[];
}
   
export interface GenerationResults {
    name: string;
    url:  string;
}

export interface GenerationDataResponse {
    abilities:       any[];
    id:              number;
    main_region:     MainRegion;
    moves:           MainRegion[];
    name:            string;
    names:           Name[];
    pokemon_species: MainRegion[];
    types:           MainRegion[];
    version_groups:  MainRegion[];
   }
   
   export interface MainRegion {
    name: string;
    url:  string;
   }
   
   export interface Name {
    language: MainRegion;
    name:     string;
   }
   

export interface PokedexApiResponse {
    descriptions: PokeApiDescription[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: PokeApiName[];
    pokemon_entries: PokeApiPokemonEntry[];
    region: null;
    version_groups: any[];
}

export interface PokeApiDescription {
    description: string;
    language: PokeApiLanguage;
}

export interface PokeApiLanguage {
    name: string;
    url: string;
}

export interface PokeApiName {
    language: PokeApiLanguage;
    name: string;
}

export interface PokeApiPokemonEntry {
    entry_number: number;
    pokemon_species: PokeApiLanguage;
}

export interface PokemonApiResponse {
    abilities:                PokeApiAbility[];
    base_experience:          number;
    forms:                    PokeApiSpecies[];
    game_indices:             PokeApiGameIndex[];
    height:                   number;
    held_items:               PokeApiHeldItem[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    PokeApiMove[];
    name:                     string;
    order:                    number;
    past_types:               any[];
    species:                  PokeApiSpecies;
    sprites:                  PokeApiSprites;
    stats:                    PokeApiStat[];
    types:                    PokeApiType[];
    weight:                   number;
   }
   
   export interface PokeApiAbility {
    ability:   PokeApiSpecies;
    is_hidden: boolean;
    slot:      number;
   }
   
   export interface PokeApiSpecies {
    name: string;
    url:  string;
   }
   
   export interface PokeApiGameIndex {
    game_index: number;
    version:    PokeApiSpecies;
   }
   
   export interface PokeApiHeldItem {
    item:            PokeApiSpecies;
    version_details: PokeApiVersionDetail[];
   }
   
   export interface PokeApiVersionDetail {
    rarity:  number;
    version: PokeApiSpecies;
   }
   
   export interface PokeApiMove {
    move:                  PokeApiSpecies;
    version_group_details: PokeApiVersionGroupDetail[];
   }
   
   export interface PokeApiVersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: PokeApiSpecies;
    version_group:     PokeApiSpecies;
   }
   
   export interface PokeApiGenerationV {
    "black-white": PokeApiSprites;
   }
   
   export interface PokeApiGenerationIv {
    "diamond-pearl":        PokeApiSprites;
    "heartgold-soulsilver": PokeApiSprites;
    platinum:               PokeApiSprites;
   }
   
   export interface Versions {
    "generation-i":    PokeApiGenerationI;
    "generation-ii":   PokeApiGenerationIi;
    "generation-iii":  PokeApiGenerationIii;
    "generation-iv":   PokeApiGenerationIv;
    "generation-v":    PokeApiGenerationV;
    "generation-vi":   { [key: string]: PokeApiHome };
    "generation-vii":  PokeApiGenerationVii;
    "generation-viii": PokeApiGenerationViii;
   }
   
   export interface PokeApiSprites {
    animated?:          PokeApiSprites;
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other?:             PokeApiOther;
    versions?:          Versions;
   }
   
   export interface PokeApiGenerationI {
    "red-blue": PokeApiRedBlue;
    yellow:     PokeApiRedBlue;
   }
   
   export interface PokeApiRedBlue {
    back_default:      string;
    back_gray:         string;
    back_transparent:  string;
    front_default:     string;
    front_gray:        string;
    front_transparent: string;
   }
   
   export interface PokeApiGenerationIi {
    crystal: PokeApiCrystal;
    gold:    PokeApiGold;
    silver:  PokeApiGold;
   }
   
   export interface PokeApiCrystal {
    back_default:            string;
    back_shiny:              string;
    back_shiny_transparent:  string;
    back_transparent:        string;
    front_default:           string;
    front_shiny:             string;
    front_shiny_transparent: string;
    front_transparent:       string;
   }
   
   export interface PokeApiGold {
    back_default:       string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
    front_transparent?: string;
   }
   
   export interface PokeApiGenerationIii {
    emerald:             PokeApiOfficialArtwork;
    "firered-leafgreen": PokeApiGold;
    "ruby-sapphire":     PokeApiGold;
   }
   
   export interface PokeApiOfficialArtwork {
    front_default: string;
    front_shiny:   string;
   }
   
   export interface PokeApiHome {
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
   }
   
   export interface PokeApiGenerationVii {
    icons:                  PokeApiDreamWorld;
    "ultra-sun-ultra-moon": PokeApiHome;
   }
   
   export interface PokeApiDreamWorld {
    front_default: string;
    front_female:  null;
   }
   
   export interface PokeApiGenerationViii {
    icons: PokeApiDreamWorld;
   }
   
   export interface PokeApiOther {
    dream_world:        PokeApiDreamWorld;
    home:               PokeApiHome;
    "official-artwork": PokeApiOfficialArtwork;
   }
   
   export interface PokeApiStat {
    base_stat: number;
    effort:    number;
    stat:      PokeApiSpecies;
   }
   
   export interface PokeApiType {
    slot: number;
    type: PokeApiSpecies;
   }
   