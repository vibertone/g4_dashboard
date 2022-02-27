import React from "react";
import imagenFondo from '../assets/images/tokio.jpg'

function Flights (props) {
    
  

  
  return (
        <div>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={imagenFondo} alt=" Alt "/> 
            <h2 className="titulo">{props.vuelo}</h2>
            <p>Precio: {props.precio} </p>
           

        </div>  
    );
  }

export default Flights;