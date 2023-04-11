import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
function App() {
  let greetings = "Hello, welcome again!";

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
      bienvenida={bienvenida}
      nombreDeMarca={nombreDeMarca}
       />
    </div>
  );
}

let bienvenida = "Bienvenido a la pagina";
let nombreDeMarca = "Cloudy commerce";

function Bienvenido() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        bienvenida={bienvenida}
        nombreDeMarca={nombreDeMarca}
      />
    </div>
  );
}

export default App;




