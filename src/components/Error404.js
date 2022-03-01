import React from "react";
import imagen from '../assets/images/rio_de_janeiro.jpg';
import { Link, Route, Routes } from "react-router-dom";
import ContenidoGeneral from "./ContenidoGeneral";

function Error404 () {

    return (

        <React.Fragment> 
        
            <div className="container w-100"> <h5> Upps! Te fuiste a cualquier parte!</h5>

            <img className="w-100" src = {imagen} alt="error404" />  Volver 
            <Link to={"/"}> -> </Link>

            </div>
            <Routes>
            <Route exact path='/' element = {<ContenidoGeneral />} /> 
            </Routes>
        </React.Fragment>



    )




}

export default Error404;