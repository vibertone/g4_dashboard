import React, { Component } from "react";
import FlightsDB from "./FlightsDB";
import LineasTablaflight from "./LineasTablaflight";


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

<div className="card shadow mb-4">
            <div className="card-body">
                        <div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> Vuelos en nuestra base </h5>
                            </div>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Hora Partida</th>
                                <th>Numero de Vuelo</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                                 {

                                        this.state.flightsList.map((flight, index)=> {



                                        return <LineasTablaflight {...flight} key = {index} />

                                        })    
                                }
                    

                        </tbody>
                    </table>
                </div>
            </div>
</div>

    




             
        {/* <div className="col-lg-6 mb-4">						
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

                          
						
        </div> */}
        

        
        </React.Fragment>


    )

}
}



export default FlightsinDB