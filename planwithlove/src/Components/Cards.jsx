import React from "react";
const Cards=({id,info,image,name,price,BtnHandler})=>{
    return (
        <center>
        <div>
             <div><img src={image}/></div>
              
               <div> 
                <h2>${price}</h2>
                 <h3> {name} </h3>
                </div>
                <div> {info}</div>
                <button className="btn"  onClick={()=>(BtnHandler(id))}> Not interested </button>
        </div>
        </center>
    );

}
export default Cards;