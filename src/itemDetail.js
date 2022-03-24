import React from 'react'
import Counter from "./Itemcount"

function ItemDetail({product}) {
    const {name, price, stock, image} = product

    const OnAdd = (contador) => {
console.log({contador, product})
    }
  return (
    <div>
        <p>{name}</p>
        <p>Price : {price}</p>
        <p>Stock : {stock}</p>
        <img src={image} alt={name}/>
        <Counter stock={stock} initial={1} OnAdd={OnAdd}/>
    </div>
  )
}

export default ItemDetail