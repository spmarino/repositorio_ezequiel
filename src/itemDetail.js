import React from "react";
import Counter from "./Itemcount";
import { UseCartContext } from "./CartContext";

function ItemDetail({ item }) {
  const { name, price, stock, image } = item;
  const { AddItem } = UseCartContext();

  const OnAdd = (cantidad) => {
    AddItem(item, cantidad);
  };

  return (
    <div>
      <p>{name}</p>
      <p>Price : {price}</p>
      <p>Stock : {stock}</p>
      <img src={image} alt={name} />
      <Counter stock={stock} initial={1} OnAdd={OnAdd} />
    </div>
  );
}

export default ItemDetail;
