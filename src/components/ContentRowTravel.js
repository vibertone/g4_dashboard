import React, {Component} from "react";
import SmallCard from "./SmallCard";

    
class ContentRowTravel extends Component {
    constructor () {
        super()
        this.state = {
            flightquantity: null,
            destiniestotal: null,
            usersquantity:null,
            citiesquantity:null,
            countriesquantity:null,
            airlinesquantity:null,
        }

    }

    componentDidMount() {
        fetch('/flightsapi/list')

        .then(res => res.json())
        .then (flight => {
        console.log(flight.data , "----------------mis datos")
        let travelInDb = {

            title: 'Cantidad Vuelos',
            color: 'primary',
            icon: 'fa-clipboard-list',
            cuantity: flight.total,
        }
        this.setState({ flightquantity: travelInDb })
        })
        .catch(error => console.log(error))
    
        fetch('/destiniesapi/list')

        .then(res => res.json())
        .then (destino => {
            console.log(destino.data , "----------------mis datos")
        let destinosInDB = {

            title: 'Destinos',
            color: 'success',
            icon: 'fa-award',
            cuantity: destino.total,
        }
        this.setState({ destiniestotal: destinosInDB })
    })
    .catch(error => console.log(error))

    
    fetch('/api/users')

    .then(res => res.json())
    .then (user => {
        console.log(user.data , "----------------mis datos")
    let usersInDB = {

        title: 'Usuarios',
        color: 'warning',
        icon: 'fa-award',
        cuantity: user.total,
    }
    this.setState({ usersquantity: usersInDB })
})
.catch(error => console.log(error))

fetch('/citiesapi/list')

        .then(res => res.json())
        .then (flight => {
        console.log(flight.data , "----------------mis datos")
        let travelInDb = {

            title: 'Ciudades',
            color: 'dark',
            icon: 'fa-clipboard-list',
            cuantity: flight.total,
        }
        this.setState({ citiesquantity: travelInDb })
        })
        .catch(error => console.log(error))
    
        fetch('/countriesapi/list')

        .then(res => res.json())
        .then (destino => {
            console.log(destino.data , "----------------mis datos")
        let destinosInDB = {

            title: 'Paises',
            color: 'info',
            icon: 'fa-award',
            cuantity: destino.total,
        }
        this.setState({ countriesquantity: destinosInDB })
    })
    .catch(error => console.log(error))

    
    fetch('/airlinesapi/list')

    .then(res => res.json())
    .then (user => {
        console.log(user.data , "----------------mis datos")
    let usersInDB = {

        title: 'Airlines',
        color: 'danger',
        icon: 'fa-award',
        cuantity: user.total,
    }
    this.setState({ airlinesquantity: usersInDB })
})
.catch(error => console.log(error))

    
    }


render() {  
    return (
        <React.Fragment>

        <div className="row">

            <SmallCard {...this.state.flightquantity} key={0} />
            <SmallCard {...this.state.destiniestotal} key={1} />
            <SmallCard {...this.state.usersquantity} key={2} />
            <SmallCard {...this.state.citiesquantity} key={3} />
            <SmallCard {...this.state.countriesquantity} key={4} />
            <SmallCard {...this.state.airlinesquantity} key={5} />

        </div>
  

        </React.Fragment>

    )
}
}

export default ContentRowTravel