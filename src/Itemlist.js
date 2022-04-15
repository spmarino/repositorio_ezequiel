import Item from "./item"
import React from "react"
function ItemList({products}){
    return(
        <div className="Productos">
         {products.map((product)=>(<Item key={product.id} product={product}/>))}
        </div>
    )
}
export default ItemList

