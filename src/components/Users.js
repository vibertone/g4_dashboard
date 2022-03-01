import React from "react";
import ico_fem from '../assets/images/mujer_icono.svg'

function Users (props){


  
  return (
    <React.Fragment>
    <div className="col-lg-6 mb-4">
        {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={ico_fem} alt=" Alt "/>  */}
            <div className= "card text-white bg-dark shadow" >
                <div className="card-body">
                  {props.name}
                  <p className="VB_Xsmall">
                    {props.id} </p>
                    <p className="VB_Xsmall">
                       {props.last_name} </p>
                       <p className="VB_Xsmall">
                    {props.email}</p>
                    
          </div>            
            {/* <h2 className="titulo">{props.identificador}</h2>
            <p>nombre: {props.genero} </p>
            <p>email: {props.edad} </p> */}
            </div>

</div>

</React.Fragment>
);
}
export default Users;