import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ContactContainer from "./Components/ContactContainer";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
