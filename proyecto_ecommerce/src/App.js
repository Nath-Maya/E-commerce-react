import React from 'react';
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Bienvenido a Wonder Bike"/>}/>
          <Route path='/categoria/:productoCategoria' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND ERROR</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
