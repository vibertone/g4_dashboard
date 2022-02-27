import React from "react"
import SmallCard from "./SmallCard"
    



let travelInDb = {

    title: 'Average daily Purchase',
    color: 'primary',
    icon: 'fa-film',
    quantity: 21

}

let totalItineraries = {

    title: 'Total Itineraries',
    color: 'success',
    icon: 'fa-award',
    quantity: 79
}

let usersQuantity = {
    title: 'Users quantity',
    color: 'warning',
    icon: 'fa-user',
    quantity: 49
}


let cartProps = [travelInDb, totalItineraries, usersQuantity]




function ContentRowTravel () {

    return (

        <div className="row">

        {cartProps.map( (travel, i) => {

            return <SmallCard {...travel} key={i}/>

        })}

        </div>
  

    

    )
}

export default ContentRowTravel; 