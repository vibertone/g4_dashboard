import React from 'react';
// import ContentRowMovies from './ContentRowMovies';
// import LastMovieInDb from './LastMovieInDb';
// import GenresInDb from './GenresInDb';
// import MoviesInDb from './MoviesInDb';


function ContenidoGeneral(){
    return(
        <React.Fragment>

				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Travel Dashboard</h1>
					</div>

					{/* <ContentRowMovies /> */}
					<div className='row'>
						
						<UsersinDB />
					</div>


				</div>


        </React.Fragment>
    )

}
export default ContenidoGeneral;