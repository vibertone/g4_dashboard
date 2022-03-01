import React from "react";
import Flights from "./Flights";


let destino = ["Barcelona", "Madrid","Valencia","Tokio"];
let precio = [40000, 50000, 40000, 10000]

function Tiraflights () {
    return (
        <div className="col-lg-6 mb-4" >
            <div className="card shadow mb-4" >
									<h5 className="m-0 font-weight-bold text-gray-800"> Vuelos </h5>
                            </div>
        {/* <div className="row" style={{paddingTop: 26}}> */}

            <Flights vuelo="Barcelona" precio="$40.000" />
            <Flights vuelo="Madrid" precio="$50.000"/>
            <Flights vuelo="Valencia" precio="$40.000"/>
            <Flights vuelo="Tokio" precio="$100.000"/>
       

        </div>
        // </div>
       
    );
  }

export default Tiraflights;