import React from "react"
import imagenFondo from '../../src/assets/images/barcelona.jpg'


function DetalleVuelo () {
return(
     <React.Fragment> 
               
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4" >
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Viaje Promocionado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Ultimo vuelo foto promocional "/>
									</div>
									<p>Barcelona es sinónimo de Antoni Gaudí, lo vas a ver y sentir en distintos puntos de la ciudad. Bajate el mapa y caminá, es la mejor forma de conocer. El Parque Güell será el lugar para que te sientes tranquilo a mirar la mezcla de naturaleza y arquitectura</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver el detalle</a>
								</div>
							</div>
                        </div>
			
    </React.Fragment>

)
}
export default DetalleVuelo;   