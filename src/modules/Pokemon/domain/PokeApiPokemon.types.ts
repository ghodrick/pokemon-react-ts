export interface Ability {
    effect_changes:      any[];
    effect_entries:      EffectEntry[];
    flavor_text_entries: AbilityFlavorTextEntry[];
    generation:          Generation;
    id:                  number;
    is_main_series:      boolean;
    name:                string;
    names:               AbilityName[];
    pokemon:             PokemonWithAbility[];
   }
   
   export interface EffectEntry {
    effect:       string;
    language:     Generation;
    short_effect: string;
   }
   
   export interface Generation {
    name: string;
    url:  string;
   }
   
   export interface AbilityFlavorTextEntry {
    flavor_text:   string;
    language:      Generation;
    version_group: Generation;
   }
   
   export interface AbilityName {
    language: Generation;
    name:     string;
   }
   
   export interface PokemonWithAbility {
    is_hidden: boolean;
    pokemon:   Generation;
    slot:      number;
   }
   

   export interface PokemonSpecies {
    base_happiness:         number;
    capture_rate:           number;
    color:                  Color;
    egg_groups:             Color[];
    evolution_chain:        EvolutionChain;
    evolves_from_species:   null;
    flavor_text_entries:    FlavorTextEntry[];
    form_descriptions:      any[];
    forms_switchable:       boolean;
    gender_rate:            number;
    genera:                 Genus[];
    generation:             Color;
    growth_rate:            Color;
    habitat:                Color;
    has_gender_differences: boolean;
    hatch_counter:          number;
    id:                     number;
    is_baby:                boolean;
    is_legendary:           boolean;
    is_mythical:            boolean;
    name:                   string;
    names:                  PokemonSpeciesName[];
    order:                  number;
    pal_park_encounters:    PalParkEncounter[];
    pokedex_numbers:        PokedexNumber[];
    shape:                  Color;
    varieties:              Variety[];
   }
   
   export interface Color {
    name: string;
    url:  string;
   }
   
   export interface EvolutionChain {
    url: string;
   }
   
   export interface FlavorTextEntry {
    flavor_text: string;
    language:    Color;
    version:     Color;
   }
   
   export interface Genus {
    genus:    string;
    language: Color;
   }
   
   export interface PokemonSpeciesName {
    language: Color;
    name:     string;
   }
   
   export interface PalParkEncounter {
    area:       Color;
    base_score: number;
    rate:       number;
   }
   
   export interface PokedexNumber {
    entry_number: number;
    pokedex:      Color;
   }
   
   export interface Variety {
    is_default: boolean;
    pokemon:    Color;
   }
   
   export interface PokeApiPokemonList {
    count:    number;
    next:     null;
    previous: null;
    results:  PokeApiPokemonResult[];
   }
   
   export interface PokeApiPokemonResult {
    name: string;
    url:  string;
   }
   
   export interface PokeApiEvolutionChain {
    baby_trigger_item: null;
    chain:             EvoChain;
    id:                number;
   }
   
   export interface EvoChain {
    evolution_details: EvolutionDetail[];
    evolves_to:        EvoChain[];
    is_baby:           boolean;
    species:           EvoSpecies;
   }
   
   export interface EvolutionDetail {
    gender:                  number | null;
    held_item:               EvoSpecies | null;
    item:                    EvoSpecies | null;
    known_move:              null;
    known_move_type:         EvoSpecies | null;
    location:                EvoSpecies | null;
    min_affection:           number | null;
    min_beauty:              null;
    min_happiness:           number | null;
    min_level:               null;
    needs_overworld_rain:    boolean;
    party_species:           null;
    party_type:              null;
    relative_physical_stats: null;
    time_of_day:             'day' | 'night' | '';
    trade_species:           null;
    trigger:                 EvoSpecies;
    turn_upside_down:        boolean;
   }
   
   export interface EvoSpecies {
    name: string;
    url:  string;
   }


   export interface PokeApiItem {
    attributes:          PokeApiItemCategory[];
    baby_trigger_for:    null;
    category:            PokeApiItemCategory;
    cost:                number;
    effect_entries:      EffectEntry[];
    flavor_text_entries: FlavorTextEntry[];
    fling_effect:        null;
    fling_power:         number;
    game_indices:        PokeApiItemGameIndex[];
    held_by_pokemon:     any[];
    id:                  number;
    machines:            any[];
    name:                string;
    names:               PokeApiItemName[];
    sprites:             PokeApiItemSprites;
   }
   
   export interface PokeApiItemCategory {
    name: string;
    url:  string;
   }
   
   export interface PokeApiItemEffectEntry {
    effect:       string;
    language:     PokeApiItemCategory;
    short_effect: string;
   }
   
   export interface PokeApiItemFlavorTextEntry {
    language:      PokeApiItemCategory;
    text:          string;
    version_group: PokeApiItemCategory;
   }
   
   export interface PokeApiItemGameIndex {
    game_index: number;
    generation: PokeApiItemCategory;
   }
   
   export interface PokeApiItemName {
    language: PokeApiItemCategory;
    name:     string;
   }
   
   export interface PokeApiItemSprites {
    default: string;
   }
   