import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import ItemDetail from "./itemDetail"
import { getDoc, collection, doc} from "firebase/firestore";
import{db} from"./firebase"
import { toast } from "react-toastify";

function ItemDetailContainer() {

    const[product,setProduct]=useState([])
    const[loading,setLoading]=useState(false)
    const {id} = useParams()

  

       
    useEffect(() => {
      const productosFirebase=collection(db,"productos")
      const miFiltro= doc(productosFirebase, id)
      const documentos=getDoc(miFiltro)

      documentos
      .then(respuesta=>setProduct({id:id, ...respuesta.data()}),
      setLoading(true))
      .catch(error=>toast.error("error al cargr productos")) 
  

      
    },[id])


  return (
    <>
    {!loading?<p>...Loading</p>:<ItemDetail item={product} />}
    </>
  )
}

export default ItemDetailContainer