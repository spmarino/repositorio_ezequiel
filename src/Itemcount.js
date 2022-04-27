import {useState} from "react";
import {Link} from "react-router-dom"



function Counter({ stock, initial, OnAdd}) {

  const [cantidad, setCantidad] = useState(initial);
  const [show, setShow] = useState(true)


  const aumentarCantidad = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > initial) setCantidad(cantidad - 1);
  };

  const AddItem = () =>{
    OnAdd(cantidad)
    setShow(false)
  }


  return (
    <div>
      {show?(<div className="Counter"> <button type="button" onClick={disminuirCantidad}>
        -
      </button>
      <p className="Cantidad">Cantidad {cantidad}</p>
     
      <button type="button" onClick={aumentarCantidad}>
        +
      </button><button onClick={AddItem}>Agregar al Carrito</button></div>):
      <Link to="/cart"> Ir al Carrito</Link>
      
      }
      
  

      
      

    </div>
  );
}

export default Counter;
