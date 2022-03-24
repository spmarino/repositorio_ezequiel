import React from "react";
import {Link} from "react-router-dom"

function Item({product}){

    const{title,price,stock,image,id} = product

    return(
        <>
        <h4>{title}</h4>
        <img style={{width:"100px", height:"auto"}} src={image}></img>
        <p>Precio{price}</p>
        <Link to={`/item/${id}`}><button>Ver Detalles</button></Link>
        
        <h4>Stock Disponible {stock}</h4>
        </>
    )
}
   export default Item