import { Outlet } from "react-router-dom";
import Layout from "./components/layout/main/Layout";

function App() {


    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default App;
