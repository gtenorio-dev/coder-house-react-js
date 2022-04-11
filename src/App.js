import NavbarComp from "./Components/Navbar/NavbarComp";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/Products/ItemListContainer";
import ItemDetailContainer from "./Components/ProductDetails/ItemDetailContainer";
import ContactContainer from "./Components/Contact/ContactContainer";
import SignUpContainer from "./Components/loggin/signup/SignUpContainer";
import SignInContainer from "./Components/loggin/signin/SignInContainer";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComp />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignInContainer />} />
          <Route path="/signup" element={<SignUpContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Footer */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
