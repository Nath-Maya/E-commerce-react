import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";



function App() {

  const greeting = "Bienvenido a Wonder Bike";

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </div>
  );
}

export default App;
