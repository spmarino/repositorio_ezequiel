import {React, useState} from 'react'
import {UseCartContext} from './CartContext'
import CartItem from './CartItem'
import { getDocs,collection,addDoc,serverTimestamp } from 'firebase/firestore'
import{db} from"./firebase"




const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);
  const[order,setOrder]=useState(false)

  

const createOrder=async(e)=>{
  e.preventDefault();
  setOrder(true)
  console.log("click");
  const order={
    buyer:{
      nombre: "comprador anonimo",
      telefono:"193029482",
      email:"email@gmail.com"
    },
item:CartList,
date:serverTimestamp(),
total:CartList.reduce((acc,i)=>(acc=(i.item.price * i.cantidad)),0)
}
    const ordenesCollection= collection(db,"ordenes")
    const pedido= addDoc(ordenesCollection,order)

  pedido
  .then((res)=>{
    console.log(res.id);
    setOrder(res.id)
    console.log("tu compra fue un exito");
  })
  .catch((error)=>{
    console.log("error");
  })
  .finally((res)=>{
    EmptyCart()
  })
}

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
              <button onClick={createOrder}>
                Checkout</button>
            {/* {order && <p> Order:{order}</p>} */}
            <h4>ORDER:{order}</h4>

            </div>
          )}
        </div>
      )}
    </div>
  );
};



export default Cart