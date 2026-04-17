import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ShoppingCart, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { cart, setCart, wishlist, setWishlist } = useContext(StoreContext);

  const isInWishlist = wishlist.some(item => item.id === product.id);
  const isInCart = cart.some(item => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const addToCart = () => {
    if (!isInCart) {
      setCart([...cart, product]);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="product-card"
    >
      <div className="card-image-wrapper">
        <img src={product.image} alt={product.title} className="product-image" />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleWishlist}
          className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
        >
          <Heart size={20} fill={isInWishlist ? "currentColor" : "none"} />
        </motion.button>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.title}</h3>
        
        <div className="product-footer">
          <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={addToCart}
              className={`add-cart-btn glass ${isInCart ? 'active-cart' : ''}`}
              title="Add to Cart"
            >
              <ShoppingCart size={20} color={isInCart ? "#6366f1" : "currentColor"} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => alert("Proceeding to checkout for " + product.title)}
              className="add-cart-btn glass"
              title="Buy Now"
            >
              <Zap size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}