import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header'
import Tirausers from './Tirausers';
import Tiraflights from './Tiraflights';
import SmallCard from './SmallCard';
import Tarjetas from './Tarjetas';
import ContentRowTravel from './ContentRowTravel';
// import TopBar from './components/TopBar';
import SideBar from './Sidebar';
import DetalleVuelo from './DetalleVuelo';
import UsersinDB from './UsersinDB';
import FlightsinDB from './FlightsinDB';
import Flightstable from './Flightstable';
// import UsersinDB from './components/UsersinDB'


function ContenidoGeneral(){
    return(
        <React.Fragment>

				<div id="content-wrapper" className="d-flex flex-column">
					<div id="content">
					<Header />
						<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Hola, ¿Cómo estas hoy?</h5>
								</div>
						<ContentRowTravel />
						<div className='row'>
						<Flightstable />
						<UsersinDB />
						</div>
						<div className='row'></div>
						<DetalleVuelo />
						<Tiraflights />
						</div>

						
					</div>

				


        </React.Fragment>
    )

}
export default ContenidoGeneral;