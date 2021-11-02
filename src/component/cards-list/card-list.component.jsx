import React from "react";
import './card-list.css'
import { Mycards } from "../card/card.component";
export const CardList = props =>{
    let i = 1;
    return(
        <div className="card">
        {props.list.map(char =>(
            <React.Fragment key={i++}>
            {(char.image !== '') ? <Mycards name={char} key={i++}  /> : <></>}
            </React.Fragment>
        ))}  
        </div>
    )
}