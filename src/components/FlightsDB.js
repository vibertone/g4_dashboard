import React from "react";
import ico_fem from '../assets/images/mujer_icono.svg'

function FlightsDB (props){


  
  return (
    <React.Fragment>
    <div className="col-lg-6 mb-4">
        {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={ico_fem} alt=" Alt "/>  */}
            <div className= "card text-white bg-dark shadow" >
                <div className="card-body">
                  {props.flight_number}
                  <p className="VB_Xsmall">
                    {props.duration} </p>
                    <p className="VB_Xsmall">
                       {props.price} </p>
                       <p className="VB_Xsmall">
                    {props.date}</p>
                    
          </div>            
           
            </div>
            </div>



</React.Fragment>
);
}
export default FlightsDB;