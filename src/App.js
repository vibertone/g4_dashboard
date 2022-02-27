import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';
import Header from './components/Header'
import Tirausers from './components/Tirausers';
import Tiraflights from './components/Tiraflights';
import SmallCard from './components/SmallCard';
import Tarjetas from './components/Tarjetas';
import ContentRowTravel from './components/ContentRowTravel';
// import TopBar from './components/TopBar';
// import SideBar from './components/Sidebar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          
          <Header />
          <div className="d-sm-flex aligns-item-center justify-content-between mb-4">
        <h2 className ="h3 mb-0 text-gray-800"> Estados </h2> 
     </div>
          
          <ContentRowTravel />
          {/* <Topbar /> */}
          <div className="d-sm-flex aligns-item-center justify-content-between mb-4">
        <h2 className ="h3 mb-0 text-gray-800"> Vuelos más solicitados </h2> 
        </div>
          <Tiraflights />
          <div className="d-sm-flex aligns-item-center justify-content-between mb-4">
        <h2 className ="h3 mb-0 text-gray-800"> Ultimos Usuarios Creados </h2> 
     </div>
          
          <Tirausers />
          {/* <SideBar /> */}

  
      
        </main>

      </header>
    </div>
  );
}

export default App;
