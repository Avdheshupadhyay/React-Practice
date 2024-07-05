import React from "react";
import Cards from "./Cards";
 const Tour=({data,BtnHandler})=>{
    return (
        <div>
           <center><div><h1> Plan With Love</h1></div></center>
           <div>
            {
                 data.map((tour)=>{
                   return <Cards key={tour.id}{...tour} BtnHandler={BtnHandler}/>
                 })
            }
            </div>
        </div>
    );
 }
 export default Tour;