import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount"



function App() {

  const greeting = "Bienvenido a Wonder Bike";

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
      <ItemCount/>
    </div>
  );
}

export default App;
