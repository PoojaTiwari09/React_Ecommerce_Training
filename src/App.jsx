import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { StoreProvider } from "./context/StoreContext";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
