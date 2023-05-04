import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Shop from "./Shop";
import Cart from "./Cart";
import ShopContextProvider from "./ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
