import React from "react";
import "./Choice.css"



function Choice({ img, vote }) {

    return (
        <>
            <div className="circle">
                <img src={img} sizes="100%" class={vote} ></img>
                <div class={vote}></div>
            </div >
        </>
    );
}

export default Choice;