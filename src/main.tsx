import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import RootError from "./pages/Errors/RootError";
import PokedexPage, { loader as pokedexLoader } from "./pages/Pokedex/PokedexPage";
import './interceptors/axios.interceptors';
import { PokeApiPokedexRepository } from "./modules/Pokedex/infrastructure/PokeApiPokedexRepository";

const repository = new PokeApiPokedexRepository();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <RootError />,
        children: [
          {
            path: "/pokedex",
            element: <PokedexPage />,
            loader: () => pokedexLoader(repository),
          }
        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
