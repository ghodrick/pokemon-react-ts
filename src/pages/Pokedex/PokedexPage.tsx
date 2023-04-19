import LayoutPokedex from "./components/LayoutPokedex/LayoutPokedex";
import Pokedex from "./components/Pokedex/Pokedex";

const PokedexPage = () => {
    return (
        <LayoutPokedex>
            <div className="xl:col-span-9">
                <Pokedex />
            </div>
            <div className="xl:col-span-3">Hola</div>
        </LayoutPokedex>
    );
};

export default PokedexPage;
