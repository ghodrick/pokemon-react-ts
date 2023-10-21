import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { queryClientConfig } from "./config/react-query";
import RepositoryProvider from "./contexts/RepositoryProvider/RepositoryProvider";
import "./index.css";
import './interceptors/axios.interceptors';
import { PokeApiPokedexRepository } from "./modules/Pokedex/infrastructure/PokeApiPokedexRepository";
import { PokeApiPokemonRepository } from "./modules/Pokemon/infrastructure/PokeApiPokemonRepository";
import RootError from "./pages/Errors/RootError";
import PokedexPage, { loader as pokedexLoader } from "./pages/Pokedex/PokedexPage";
import PokemonPage, { loader as pokemonLoader } from "./pages/Pokemon/PokemonPage";

const queryClient = new QueryClient(queryClientConfig);
/*
  Creamos un objeto repositories que contiene todos los repositorios de la aplicación y lo pasamos al RepositoryProvider
  para que pueda ser consumido por los custom hooks de React Query
*/
const repositories = {
    pokedex: new PokeApiPokedexRepository(),
    pokemon: new PokeApiPokemonRepository()
}


/*
  Podríamos cargar los datos de dos formas distintas, usando los loaders o usando los custom hooks de React Query.
  Esta implementación combina ambas. Por una parte, se usa el loader para cargar los datos y por otra
  se usa el custom hook para mantener los datos en caché y poder refrescarlos.
*/

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <RootError />,
        children: [
          {
            path: "/",
            element: <PokedexPage />,
            loader: () => pokedexLoader(repositories.pokedex, queryClient),
          },
          {
            path: '/pokemon/:id',
            element: <PokemonPage />,
            loader: ({params}) => pokemonLoader(params.id, repositories.pokemon, queryClient)
          }
        ]
    },
    
]);



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RepositoryProvider repositories={repositories}>
            <RouterProvider router={router} />
        </RepositoryProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
);
