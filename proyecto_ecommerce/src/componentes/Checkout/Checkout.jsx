import {
  getDocs,
  addDoc,
  collection,
  query,
  where,
  Timestamp,
  writeBatch,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useContext, useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const Checkout = () => {
  const [cargando, setCargando] = useState(false);
  const [ordenId, setOrdenId] = useState("");

  const { cart, totalQuantity, clearCart } = useContext(CartContext);

  const crearOrden = async ({ name, phone, email }) => {
    setCargando(true);

    try {
      const objOrden = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: totalQuantity(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const agotadoStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "productos");

      const productosAdicionarFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productosAdicionarFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productoAgregadoCarrito = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productoAgregadoCarrito?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          agotadoStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (agotadoStock.length === 0) {
        await batch.commit();

        const ordenRef = collection(db, "ordenes");

        const ordenAdd = await addDoc(ordenRef, objOrden);

        setOrdenId(ordenAdd.id);
        clearCart();
      } else {
        console.error("Hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };
  if (cargando) {
    let timerInterval;
    Swal.fire({
      title: "Orden de Compra",
      html: "Generando en <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }

  if (ordenId) {
    return <h1>El id de su orden es: {ordenId} </h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={crearOrden} />
    </div>
  );
};

export default Checkout;
