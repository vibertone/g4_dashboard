import React from "react"
import SmallCard from "./Tarjetas"
    



let usersInDb = {

    title: 'Users in Data Base',
    color: 'primary',
    icon: 'fa-film',
    quantity: 21

}

let totalvuelos = {

    title: 'Total Flights',
    color: 'success',
    icon: 'fa-award',
    quantity: 79
}

let usersAge = {
    title: 'Age media',
    color: 'warning',
    icon: 'fa-user',
    quantity: 49
}


let cartProps = [usersInDb, totalvuelos, usersAge]




// function ContentRowMovies () {

//     return (

//         <div className="row">

//         {cartProps.map( (movie, i) => {

//             return <SmallCard {...movie} key={i}/>

//         })}

//         </div>
  

    

//     )
// }

// export default ContentRowMovies; 