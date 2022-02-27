import React from "react";
import Flights from "./Flights";
import Users from "./Users";

let identificador = ["Rober23", "FedeBR", "ViBer","ToTo32"];
let genero = ["femenino", "masculino","femenino","maculino"];
let edad = [20,30,50,35];


function Tirausers () {
    return (
        <div className="vuelos">
          <Users identificador="Rober23" genero="femenino" edad = "20"/>
          <Users identificador="FedeBR" genero="masculino" edad = "30"/>
          <Users identificador="ViBer" genero="femenino" edad = "50"/>
          <Users identificador="ToTo32" genero="masculino" edad = "35"/>
        </div>
    );
  }

export default Tirausers;