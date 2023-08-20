import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";


function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const categoria = useParams().categoria;


  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
    
    getDocs(q).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
