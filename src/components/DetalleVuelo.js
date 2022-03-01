import React from "react"
import imagenFondo from '../../src/assets/images/barcelona.jpg'


function DetalleVuelo () {
return(
     <React.Fragment> 
               
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Nuevo paquete de Viaje</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Ultimo vuelo foto promocional "/>
									</div>
									<p>Iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver el detalle</a>
								</div>
							</div>
                        </div>
			
    </React.Fragment>

)
}
export default DetalleVuelo;   