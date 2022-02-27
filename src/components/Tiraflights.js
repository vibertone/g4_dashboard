import React from "react";
import Flights from "./Flights";

let destino = ["Barcelona", "Madrid","Valencia","Tokio"];
let precio = [40000, 50000, 40000, 10000]

function Tiraflights () {
    return (
        <div className="vuelos">
            <Flights vuelo="Barcelona" precio="$40.000" />
            <Flights vuelo="Madrid" precio="$50.000"/>
            <Flights vuelo="Valencia" precio="$40.000"/>
            <Flights vuelo="Tokio" precio="$100.000"/>
        </div>
    );
  }

export default Tiraflights;