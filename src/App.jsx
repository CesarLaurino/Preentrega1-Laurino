import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <Body />
      <ItemListContainer mensaje={"Monster Energy Drink"}/>
      <Productos />
      <Footer />
    </div>
  );
}

export default App;

