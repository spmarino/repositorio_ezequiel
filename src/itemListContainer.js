import { useEffect, useState } from "react";
import ItemList from "./Itemlist";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { getDocs, query, collection, where } from "firebase/firestore";
import { toast } from "react-toastify";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      const productosFirebase = collection(db, "productos");
      const documentos = getDocs(productosFirebase);
      documentos
        .then((res) => {
          const docs = res.docs;
          const docs_reset = docs.map((doc) => {
            const producto = {
              id: doc.id,
              ...doc.data(),
            };
            return producto;
          });
          setProducts(docs_reset);
          setLoading(true);
        })
        .catch((error) => toast.error("error al cargar productos"));
    } else {
      const productosFirebase = collection(db, "productos");
      const miFiltro = query(productosFirebase, where("category", "==", id));
      const documentos = getDocs(miFiltro);
      documentos
        .then((res) => {
          const docs = res.docs;
          const docs_reset = docs.map((doc) => {
            const producto = {
              id: doc.id,
              ...doc.data(),
            };
            return producto;
          });
          setProducts(docs_reset);
          setLoading(true);
        })
        .catch((error) => toast.error("error al cargr productos"));
    }
  }, [id]);

  if (!loading) {
    return <h4>...Loading</h4>;
  } else {
    return (
      <div className="Itemcontainer">
        <ItemList products={products} />
      </div>
    );
  }
}

export default ItemListContainer;
