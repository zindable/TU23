import React from "react";
import "./Choice.css"



function Choice({ img, vote }) {

    return (
        <>
            <div className="circle">
                <img src={img} sizes="100%" class={vote}></img>
            </div >
        </>
    );
}

export default Choice;