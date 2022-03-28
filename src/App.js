import "./App.css";
import NavbarComp from "./Components/NavbarComp";
// import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      {/* <ItemListContainer /> */}

      <ItemDetailContainer/>

    </div>
  );
}

export default App;
