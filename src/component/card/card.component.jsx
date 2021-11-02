import React from "react";


export const Mycards = props =>{
    return (
        <div key={props.id} className="cards">
            <img src={props.name.image} height="200px" width="280px" style={{objectFit:'contain'}} alt="Photos" />
            <h1>{props.name.name}</h1>
            <p>{props.name.actor}</p>
        </div>
    )
}