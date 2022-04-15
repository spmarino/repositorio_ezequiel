import React from "react";
import {Link} from "react-router-dom"

function Item({product}){

    const{title,price,stock,image,id} = product

    return(
        <div className="Item">
        <h4>{product.name}</h4>
        <img style={{width:"200px", height:"auto"}} src={image}></img>
        <p className="precio">Precio: {product.price}</p>
        <Link to={`/item/${id}`}><button>Ver Detalles</button></Link>
        
        <h4>Stock Disponible {stock}</h4>
        </div>
    )
}
   export default Item