import React from "react";
import Flights from "./Flights";


function Tiraflights () {
    return (
        <div className="vuelos">
            <Flights vuelo="Barcelona" precio="40000" />
            <Flights vuelo="Madrid" precio="50000"/>
            <Flights vuelo="Valencia" precio="40000"/>

        </div>
    );
  }

export default Tiraflights;