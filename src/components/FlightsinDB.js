import React, { Component } from "react";

import FlightsDB from "./FlightsDB";


class FlightsinDB extends Component {
    constructor(){
        super()
        this.state = {

            flightsList : []   //estado inicial

        }
    }

    componentDidMount(){

        fetch('/flightsapi/list')
        
        .then(res=>res.json())
        
        .then(datos =>{
            console.log(datos.data,'---------------------')
            this.setState({flightsList: datos.data})
        })
        .catch(error => console.log(error))

    }


render () {

    return (
             
        <React.Fragment>
             
        <div className="col-lg-6 mb-4">						
					<div className="card shadow mb-4">
							<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> Flights in Database </h5>
                            </div>
                    <div className="row" style={{paddingTop: 26}}>

                            {
                            
                                this.state.flightsList.map((flight, index)=> {

                                 return <FlightsDB  {...flight} key = {index} />

                                })
                                             
                             }
                    </div>
                    </div>

                          
						
        </div>
        

        
        </React.Fragment>


    )

}
}



export default FlightsinDB