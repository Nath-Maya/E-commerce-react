import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", itemId);
    getDoc(docRef).then((resp) => {
      setProduct({ ...resp.data(), id: resp.id });
    });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
