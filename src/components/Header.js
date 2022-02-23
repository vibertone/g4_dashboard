import React from "react"


function Header () {

return (
       <div>

            <div className= "container-header">
                <div className="header-box1">
                    {/* <img src="/img/Logotransp.png" className="logo" */}
                   </div>    
                <div className="header-box2">
                    <div>
                            <i className="fas fa-plane"></i>
                            <p> Vuelos </p>
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
    

);
}

export default Header;