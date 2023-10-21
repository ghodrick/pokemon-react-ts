import { Outlet, ScrollRestoration } from "react-router-dom";
import Layout from "./components/layout/main/Layout";

function App() {


    return (
        <Layout>
            <ScrollRestoration />
            <Outlet />
        </Layout>
    );
}

export default App;
