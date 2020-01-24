import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import tileData from "../Constants/tileData"
function Sample() {
return(
<div style={{display:"flex"}}>
{tileData.map((res, key)=>{
    return(
        <img src={res.img} alt={res.title} height="200px" width="400px" style={{marginLeft:5}}/>
    )
})}
</div>
)


}
export default Sample