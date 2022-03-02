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

            <Flights vuelo="Barcelona" precio="$40.000" />
            <Flights vuelo="Madrid" precio="$100.000" />

            </div>
            </div>

        
       
       </React.Fragment>
    );
  }

export default Tiraflights;