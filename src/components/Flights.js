import React from "react";

function Flights (props) {
    
  
  let destino = ["Barcelona", "Argentina","Bariloche","Berlin"];
  let precio = 10000;
  
  return (
        <div> 
            <h2 className="titulo">{props.vuelo}</h2>
            <p>Precio: {props.precio} </p>
            {/* <ul>
              { destino.map ( destino => <li> {destino} </li>)
          </ul> */}

        </div>  
    );
  }

export default Flights;