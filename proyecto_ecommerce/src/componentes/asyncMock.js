const productos = [
   {
      "id": 1,
      "name": "Bicicleta Gt Avalanche Comp 2022",
      "price": 599.99,
      "categoria": "Bicicleta",
      "img": "proyecto_ecommerce/public/img/bici1.jpeg",
      "stock": 10,
      "description": "El cuadro de aluminio liviano presenta el diseño Triple Triangle de GT para un manejo preciso, con una transmisión 1×10 para cambios suaves y simplificados y una horquilla de 100 mm de recorrido para reducir la vibración del sendero y aumentar el control de tracción."
    },
    {
      "id": 2,
      "name": "Bicicleta GT Avalanche Elite 29 2022",
      "price": 799.99,
      "categoria": "Bicicleta",
      "img": "proyecto_ecommerce/public/img/bici2.jpeg",
      "stock": 5,
      "description": "Para los aspirantes a ciclistas que han despertado su amor por la conducción todoterreno, esta rígida de aluminio está equipada con una horquilla de 120 mm de recorrido para absorber el impacto al recorrer senderos más técnicos y está construida con el eficiente diseño de cuadro Triple Triangle de GT con asientos flotantes para más respaldo. -comodidad del asiento en terrenos más accidentados, gran tracción en escalada y mejor manejo"
    },
    {
      "id": 3,
      "name": "Bicicleta GT Force Elite",
      "price": 750.99,
      "categoria": "Bicicleta",
      "img": "proyecto_ecommerce/public/img/bici3.jpeg",
      "stock": 25,
      "description": "se ha desarrollado para ciclistas que buscan grandes golpes y mucha gravedad, el Force 29 Elite está diseñado para la emoción. Con la suspensión de Fox y Marzocchi y una transmisión SRAM Eagle. Es la construcción perfecta para aquellos a quienes les gusta tirar la bicicleta en el portabicicletas y hacer All Mountain."
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