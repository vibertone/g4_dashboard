import React from "react";
import imagenFondo from '../assets/images/tokio.jpg'

function Flights (props) {
    
  

  
  return (
    <React.Fragment>
        
        <div className="">
            
                <div className="table-responsive">
                    <table className="table table-striped table-hover"  width="100%" >
                      <thead className="table-primary">
                          <tr>
                            <th scope="col">Vuelo</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Nro de Vuelo</th>
                            <th scope="col">Duración</th>
                          </tr>

                     </thead>
                          <tbody>
                              <tr>

                                <td>{props.vuelo} </td>
                                <td>{props.precio} </td>
                                <td> {props.nvuelo} </td>
                                <td> {props.duration} </td>
                         


                              </tr>
                              </tbody>
                              </table>
                              </div> 
                               
                              </div> 
       
 
  </React.Fragment>
  )
}
export default Flights;