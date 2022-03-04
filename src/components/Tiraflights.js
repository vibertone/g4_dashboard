import { process_params } from "express/lib/router";
import React from "react";
import Flights from "./Flights";



function Tiraflights () {
    return (
        <React.Fragment>






         <div className="col-lg-6 mb-4" >

         <div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> Lo mas solicitado el último mes </h5>
                            </div>


            {/* <div className="card shadow mb-4" >
									<h5 className="m-0 font-weight-bold text-gray-800"> Lo más solicitado del último mes </h5>
                            </div> */}
         <div className="row" style={{paddingTop: 26}}> 

            <Flights vuelo="Barcelona" precio="$151.529" nvuelo="AGG5846" duration="21:09 hs" />
            <Flights vuelo="Madrid" precio="$150.283" nvuelo="GOG5599" duration="13:35 hs" />

            </div>
            </div>

        
       
       </React.Fragment>
    );
  }

export default Tiraflights;