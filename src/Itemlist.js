import Item from "./item"
import React from "react"
function ItemList({products}){
    return(
        <>
         {products.map((product)=>(<Item key={product.id} product={product}/>))}
        </>
    )
}
export default ItemList

