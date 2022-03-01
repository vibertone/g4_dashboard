import React from "react";
import logo from '../assets/images/Logotransp.png';
import { Link, Route, Routes } from "react-router-dom";


function Header () {

return (
    <React.Fragment>
       <div>

            <div className= "container-header">
                {/* <div className="header-box1">  
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 + 'rem'}} src={logo} alt=" Alt "/>
                   </div>     */}
                <div className="header-box2">
                    <div>
                            <i className="fas fa-plane"></i>
                            
                            <a href="http://localhost:5000/" > <p> Vuelos </p>  </a>
                        </div>
                    <div>
                            <i className="fas fa-concierge-bell"></i>
                            <p> Hoteles </p>
                        </div>
                    <div>
                            <i className="fas fa-suitcase"></i>
                            <p> Paquetes </p>
                        </div>
                    <div>
                            <i className="fas fa-briefcase-medical"></i>
                            <p> Asistencias </p>
                        </div>
                    <div>
                            <i className="fas fa-car-side"></i>
                            <p> Autos </p>
                        </div>
                    <div>
                            <i className="fas fa-skiing-nordic"></i>
                            <p> Actividades </p>
                        </div>
                    </div>
                <div className="header-box3">
                        <div><a href=""><i className="fas fa-phone-alt"></i></a></div>
                        <div><a href=""><i className="fas fa-suitcase-rolling"></i></a></div>
                    </div>           
                                                                              
                                    
            </div>            
        </div>
    <Routes>
<Route path="/TravelPoint" href='http://localhost:5000/' ></Route>

    </Routes>



</React.Fragment>
)
}
export default Header;