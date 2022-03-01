import React from 'react';

import './assets/css/app.css';
import ContenidoGeneral from './components/ContenidoGeneral';
// import Header from '../components/Header'
// import Tirausers from '../components/Tirausers';
// import Tiraflights from '../components/Tiraflights';
// import SmallCard from '../components/SmallCard';
// import Tarjetas from '../components/Tarjetas';
// import ContentRowTravel from '../components/ContentRowTravel';
// // import TopBar from './components/TopBar';
import SideBar from './components/Sidebar';





function App() {
  return (
    <React.Fragment>    
        <div id="wrapper" className='container VB'>
        <SideBar />
        <ContenidoGeneral />

       

<ul className= "navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">...</ul>

        </div> 
    </React.Fragment>
  );
}

export default App;

