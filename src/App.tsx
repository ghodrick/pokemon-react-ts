import { Outlet, useNavigation } from "react-router-dom";
import Layout from "./components/layout/main/Layout";
import Cargando from "./components/loaders/Cargando/Cargando";

function App() {

    const navigation = useNavigation();

    return (
        <Layout>
            <Cargando active={navigation.state}>
                <Outlet />
            </Cargando>
        </Layout>
    );
}

export default App;
