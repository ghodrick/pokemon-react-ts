import { MenuItem } from "../models/Menu.types";
import { TbPokeball } from 'react-icons/tb';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

export const menu: MenuItem[] = [
    {
        name: 'Home',
        path: '/',
        icon: MdOutlineCatchingPokemon
    },
    {
        name: 'Pokédex',
        path: '/pokedex',
        icon: TbPokeball
    }
]