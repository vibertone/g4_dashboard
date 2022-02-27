import React from "react";
import ico_fem from '../assets/images/mujer_icono.svg'

function Users (props){


  
  return (
    <div>
        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={ico_fem} alt=" Alt "/> 
            <h2 className="titulo">{props.identificador}</h2>
            <p>Precio: {props.genero} </p>
            <p>Edad: {props.edad} </p>
    

</div>  
);
}
export default Users;