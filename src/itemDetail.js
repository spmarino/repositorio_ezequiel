import React from "react";
import Counter from "./Itemcount";
import { UseCartContext } from "./CartContext";

function ItemDetail({ item }) {
  const { name, price, stock, image, descripcion} = item;
  const { AddItem } = UseCartContext();

  const OnAdd = (cantidad) => {
    AddItem(item, cantidad);
  };

  return (
    <div className="ItemDetail">
      <p>{name}</p>
      <p>Price : {price}</p>
      <p>Stock : {stock}</p>
      <img style={{width:"400px", height:"auto"}} src={image} alt={name} />
      <p>{descripcion}</p>
      <Counter stock={stock} initial={1} OnAdd={OnAdd} />
    </div>
  );
}

export default ItemDetail;
