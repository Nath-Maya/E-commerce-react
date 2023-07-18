import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";



function App() {

  const greeting = "Bienvenido a Wonder Bike";

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Wonder Bike"}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
