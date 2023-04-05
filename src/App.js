import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";

function App() {
  let greetings = "Hello, welcome again!";

  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemListContainer greetings={greetings} />
      <Footer />
    </div>
  );
}

export default App;
