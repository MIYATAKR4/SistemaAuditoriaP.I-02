import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaSetor from "../components/PaginaSetor";
import Signup from "../components/Sigin";
import Login from "../components/Login";

const Private = ({ item }) => {
    const signed = false

    return (
        signed > 0 ? <item /> : <Login />
    );
}


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/setores" element={<Private item={PaginaSetor} />} /> 
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;