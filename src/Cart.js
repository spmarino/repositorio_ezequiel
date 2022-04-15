import {React, useState} from 'react'
import {UseCartContext} from './CartContext'
import CartItem from './CartItem'
import { getDocs,collection,addDoc,serverTimestamp } from 'firebase/firestore'
import{db} from"./firebase"


const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);

  const orden={
    buyer:{
      nombre:"ezequiel",
      telefono:"19087393" ,
      email:  "mail.usuario@gmail.com"
    },
    items:[],
    date:serverTimestamp(),
  }
const ordenesCollection=collection(db,"ordenes")
const pedido = addDoc(ordenesCollection,orden)

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className='CartFormat'>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <h2>Cart</h2>

          {CartList.length < 1 ? (
            <h2>You have no items in your shopping cart</h2>
          ) : (
            <div>
              <div>
                <div>
                  {CartList.map((i) => (
                    <CartItem
                      key={i.item.id}
                      Item={i.item}
                      Quantity={i.cantidad}
                    />
                  ))}
                </div>
              </div>
              <button onClick={EmptyCart}>Empty Cart</button>
              <h2>Total: {PriceTotal()} U$D</h2>
            
            </div>
          )}
        </div>
      )}
    </div>
  );
};



export default Cart