import React from "react";
import Users from "./Users";
import '../../src/assets/css/app.css';
import logo from '../assets/images/Logotransp.png';
import ContenidoGeneral from "./ContenidoGeneral";
import ContentRowTravel from "./ContentRowTravel";
import UsersinDB from "./UsersinDB";
import DetalleVuelo from "./DetalleVuelo";
import { Link, Route, Routes } from "react-router-dom";
import Tiraflights from "./Tiraflights";
import Error404 from "./Error404";
import Flightstable from "./Flightstable";


function SideBar() {
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
               {/*<!-- Sidebar - Brand -->*/}
                     <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                        {/* <div className="sidebar-brand-icon"> */}
                        <img className="w-100" src={logo} alt="TravelPoint"/>
                        {/* </div> */}
                    </Link>

                            {/*<!-- Divider -->*/}
                            <hr className="sidebar-divider2"/>

                            {/*<!-- Nav Item - Dashboard -->*/}
                            <li className="nav-item active">
                                <div className="nav-link" to="/">
                                    <i className="fas fa-fw fa-tachometer-alt"></i>
                                   <Link to={"/"}> <span>Dashboard</span> </Link>
                                </div>
                            </li>

                            {/*<!-- Divider -->*/}
                            <hr className="sidebar-divider"/>

                            {/*<!-- Nav Item - Pages -->*/}
                            <li className="nav-item">
                                <Link className="nav-link collapsed" to="/ContentRowTravel">
                                    <i className="fas fa-fw fa-chart-area"></i>
                                    <span>Estados</span>
                                </Link>
                                </li>

                                <li className="nav-item">
                                
                                <Link className="nav-link" to="/Usuarios">
                                    <i className="fas fa-fw fa-folder"></i>
                                    <span>Usuarios</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                
                                <Link className="nav-link" to="/vuelos">
                                    <i className="fas fa-fw fa-folder"></i>
                                    <span>Vuelos</span>
                                </Link>
                            </li>

                </ul>
                        
            <Routes>
            <Route exact path='/' element = {<ContenidoGeneral />} /> 
            <Route exact path='/ContentRowTravel' element = {<ContentRowTravel />} />
            <Route exact path='/Usuarios' element = {<UsersinDB />} />   
            <Route exact path='/Vuelos' element = {<Flightstable />} /> 
            <Route exact path='/*' element = {<Error404 />} />     
                </Routes>        
                

 
 {/* <Routes>
          
        <Route path="/" element = {<ContentWrapper />} />
        <Route path="/stats" element = {<div className='col-8'> <ContentRowMovies /></div>} />
        <Route path="/categories" element =  {<GenresInDb />} />
        <Route path="/table" element = {<MoviesInDb />} />
        <Route path="/categories/:id" element = {<CategoriesDetail />} />
        <Route path="/search" element = {<SearchMovies />} />


          <Route path='*' element= {<Error404 />} 

    </Routes>  */}




    </React.Fragment>
    )
}    
export default SideBar;