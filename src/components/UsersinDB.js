import React, { Component } from "react";
import Users from "./Users";


class UsersinDB extends Component {
    constructor(){
        super()
        this.state = {

            usersList : []   //estado inicial

        }
    }

    componentDidMount(){

        fetch('/api/users')
        
        .then(res=>res.json())
        
        .then(datos =>{
            console.log(datos+'---------------------')
            this.setState({usersList: datos.data})
        })
        .catch(error => console.log(error))

    }


render () {

    return (
             
        <>
             
        <div className="col-lg-6 mb-4">						
					<div className="card shadow mb-4">
							<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> Genres in Date Base </h5>
                            </div>
                    <div className="row" style={{paddingTop: 26}}>

                            {
                            
                                this.state.usersList.map((user, index)=> {

                                 return <User  {...user} key = {index} />

                                })
                                             
                             }
                    </div>
                    </div>

                          
						
        </div>
        

        
        </>


    )

}
}



export default UsersinDB