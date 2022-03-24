import React from "react";
import { UseCartContext } from "./CartContext";



const CartItem = ({ Item, Quantity }) => {
  const { DelItem } = UseCartContext();
  const { image, title, id, price } = Item;

  const total = price * Quantity;

  return (
    <div>
      <img style={{width:"50px", heigth:"auto"}} src={image} alt={title} />
      <h4>{title}</h4>
      <h4> {Quantity} Units</h4>
      <h4> U$D {total}</h4>
      <button  onClick={() => DelItem(id)}>X</button>
    </div>
  );
};

export default CartItem;