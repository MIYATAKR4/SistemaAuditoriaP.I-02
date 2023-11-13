import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "../pages/home/Formulario";
import Signup from "../pages/sign_up/Signup";
import Login from "../pages/sign_in/SignIn";
import useAuth from "../hooks/useAuth";

const Private = ({Item}) => {
    const {signed} = useAuth();
    return (
        signed > 0 ? <Item /> : <Login />
    );
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/form" element={<Private Item={Formulario}/>} /> 
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;