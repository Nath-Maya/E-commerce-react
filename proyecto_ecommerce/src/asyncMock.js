const productos = [
   {
      "id": 1,
      "name": "Bicicleta Gt Avalanche Comp 2022",
      "price": 3259599,
      "categoria": "Bicicletas",
      "img": "https://assets.specialized.com/i/specialized/91522-55_ROCKHOPPER-COMP-29-REDWD-SMK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
      "stock": 10,
      "description": "El cuadro de aluminio liviano presenta el diseño Triple Triangle de GT para un manejo preciso, con una transmisión 1×10 para cambios suaves y simplificados y una horquilla de 100 mm de recorrido para reducir la vibración del sendero y aumentar el control de tracción."
    },
    {
      "id": 2,
      "name": "Bicicleta GT Avalanche Elite 29 2022",
      "price": 2570800,
      "categoria": "Bicicletas",
      "img": "https://bicistore.com.co/wp-content/uploads/2021/01/imagen-6-1.jpg",
      "stock": 5,
      "description": "Esta rígida de aluminio está equipada con una horquilla de 120 mm de recorrido para absorber el impacto al recorrer senderos más técnicos y está construida con el eficiente diseño de cuadro Triple Triangle de GT con asientos flotantes para más respaldo."
    },
    {
      "id": 3,
      "name": "Bicicleta GT Force Elite",
      "price": 16780400,
      "categoria": "Bicicletas",
      "img": "https://bicistore.com.co/wp-content/uploads/2021/11/20220520_145823.jpg",
      "stock": 25,
      "description": "Se ha desarrollado para ciclistas que buscan grandes golpes y mucha gravedad, el Force 29 Elite está diseñado para la emoción. Con la suspensión de Fox y Marzocchi y una transmisión SRAM Eagle."
    },
    {
      "id": 3,
      "name": "Casco Met Trenta Tips",
      "price": 1090000,
      "categoria": "Accesorios",
      "img": "https://bicistore.com.co/wp-content/uploads/2023/04/met-trenta-oliva.webp",
      "stock": 20,
      "description": "Con el sistema de protección cerebral MIPS-C2®, el MET Trenta Mips puede deslizarse en relación con la cabeza en caso de choque, redirigiendo el movimiento de rotación dañino.."
    },
    {
      "id": 3,
      "name": "Zapatillas Giro",
      "price": 554000,
      "categoria": "Accesorios",
      "img": "https://bicistore.com.co/wp-content/uploads/2023/04/Cadet-blanco-1.jpg",
      "stock": 14,
      "description": "Parte superior synchwire, una suela exterior reforzada con fibra de carbono y un facil ajuste BOA"
    }
]

export const getProducts = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(productos);
      }, 500);
   });
}

export const getProductById = (productId) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(productos.find(prod => prod.id === productId));
      }, 500);
   });
}