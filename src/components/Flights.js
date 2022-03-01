import React from "react";
import imagenFondo from '../assets/images/tokio.jpg'

function Flights (props) {
    
  

  
  return (
    <React.Fragment>
        
        <div className="">
            
                <div className="table-primary">
                    <table className="table-info" id="dataTable" width="100%" cellSpacing="0">
                      <thead>
                          <tr>
                            <th scope="col">Vuelo</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Nro de Vuelo</th>
                            <th scope="col">Duración</th>
                          </tr>

                    </thead>
                          <tbody>
                              <tr className="table-primary">

                                <td>{props.vuelo} </td>
                                <td>{props.precio} </td>
                                <td> 0453# </td>
                                <td> 18hs </td>
                         


                              </tr>
                              </tbody>
                              </table>
                              </div> 
                               
                              </div> 
       
 
  </React.Fragment>
  )
}
export default Flights;