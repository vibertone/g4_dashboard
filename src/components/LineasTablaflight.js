import React from 'react';


function LineasTablaflight(props){

  

    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.date}</td>
                    <td>{props.time}</td>
                    <td>{props.flight_number} </td>
                    <td>{props.price}</td>
                </tr>
            )
    }
    
        

export default LineasTablaflight;