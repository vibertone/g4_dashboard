import React from "react";
import Users from "./Users";
import '../../src/assets/css/app.css';
import logo from '../assets/images/Logotransp.png';

function SideBar() {
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
               {/*<!-- Sidebar - Brand -->*/}
                     <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                        <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo} alt="TravelPoint"/>
                        </div>
                    </a>

                            {/*<!-- Divider -->*/}
                            <hr className="sidebar-divider my-0"/>

                            {/*<!-- Nav Item - Dashboard -->*/}
                            <li className="nav-item active">
                                <div className="nav-link" to="/">
                                    <i className="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard</span>
                                </div>
                            </li>

                            {/*<!-- Divider -->*/}
                            <hr className="sidebar-divider"/>

                            {/*<!-- Nav Item - Pages -->*/}
                            <li className="nav-item">
                                <div className="nav-link collapsed" to="/stats">
                                    <i className="fas fa-fw fa-chart-area"></i>
                                    <span>Estados</span>
                                </div>
                                </li>
                                <li className="nav-item">
                                
                                <a className="nav-link" to="/categories">
                                    <i className="fas fa-fw fa-folder"></i>
                                    <span>Usuarios</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                
                                <a className="nav-link" to="/categories">
                                    <i className="fas fa-fw fa-folder"></i>
                                    <span>Vuelos</span>
                                </a>
                            </li>

</ul>
                        
                    
                

 

    {/* <Routes>
          
        <Route path="/" element = {<ContentWrapper />} />
        <Route path="/stats" element = {<div className='col-8'> <ContentRowMovies /></div>} />
        <Route path="/categories" element =  {<GenresInDb />} />
        <Route path="/table" element = {<MoviesInDb />} />
        <Route path="/categories/:id" element = {<CategoriesDetail />} />
        <Route path="/search" element = {<SearchMovies />} />


          {/*<Route path='*' element= {<Error404 />} /> */}

    {/* {</Routes> */} 




        </React.Fragment>
    )
}
export default SideBar;