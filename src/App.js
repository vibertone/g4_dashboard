import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';

import Header from './components/Header'
import Users from './components/Users';
import Flights from './components/Flights';
import Tirausers from './components/Tirausers';
import Tiraflights from './components/Tiraflights';
// import SideBar from './components/Sidebar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Header />
          <Tiraflights />
         
          <Tirausers />
          {/* <SideBar /> */}

  
      
        </main>

      </header>
    </div>
  );
}

export default App;
