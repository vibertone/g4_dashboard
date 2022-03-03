import React, { Component } from "react";
import Destinies from "./Destinies";


class DestiniesinDB extends Component {
    constructor(){
        super()
        this.state = {

            destiniesList : []   //estado inicial

        }
    }

    componentDidMount(){

        fetch('/destiniesapi/list')
        
        .then(res=>res.json())
        
        .then(datos =>{
            console.log(datos.data,'---------------------')
            this.setState({destiniesList: datos.data})
        })
        .catch(error => console.log(error))

    }


render () {

    return (
             
        <React.Fragment>
             
        <div className="col-lg-6 mb-4">						
					<div className="card shadow mb-4">
							<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> Nuestros Destinos </h5>
                            </div>
                    <div className="row" style={{paddingTop: 26}}>

                            {
                            
                                this.state.destiniesList.map((destiny, index)=> {

                                 return <Destinies  {...destiny} key = {index} />

                                })
                                             
                             }
                    </div>
                    </div>

                          
						
        </div>
        

        
        </React.Fragment>


    )

}
}



export default DestiniesinDB