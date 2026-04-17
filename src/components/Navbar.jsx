import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ShoppingBag, Heart, Sun, Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { cart, wishlist, theme, toggleTheme } = useContext(StoreContext);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <motion.div
          className="gradient-text h2"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="text-primary" size={24} />
          LabelByPooja
        </motion.div>
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          <span>Shop</span>
        </Link>
        <Link to="/wishlist" className="nav-link nav-badge-container">
          <Heart size={20} />
          <span>Wishlist</span>
          {wishlist.length > 0 && <span className="nav-badge">{wishlist.length}</span>}
        </Link>
        <Link to="/cart" className="nav-link nav-badge-container">
          <ShoppingBag size={20} />
          <span>Cart</span>
          {cart.length > 0 && <span className="nav-badge">{cart.length}</span>}
        </Link>

        <motion.button
          onClick={toggleTheme}
          className="theme-toggle glass"
          style={{ padding: '0.5rem', borderRadius: '12px', display: 'flex' }}
          whileTap={{ rotate: 45, scale: 0.9 }}
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>
      </div>
    </nav>
  );
}
