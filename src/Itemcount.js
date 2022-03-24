import {useState} from "react";



function Counter({ stock, initial, OnAdd}) {
  const [contador, setContador] = useState(initial);


  const aumentarContador = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > initial) setContador(contador - 1);
  };

  const AddItem =() =>{
    OnAdd (contador)
  }
  return (
    <div>
      <div className="Counter"> <button type="button" onClick={disminuirContador}>
        -
      </button>
      <p className="Cantidad">Cantidad {contador}</p>
     
      <button type="button" onClick={aumentarContador}>
        +
      </button></div>
  

      
      <button onClick={AddItem}>Agregar al Carrito</button>

    </div>
  );
}

export default Counter;
