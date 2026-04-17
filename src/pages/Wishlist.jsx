import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";
import { Heart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist } = useContext(StoreContext);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container"
      style={{ padding: '4rem 2rem' }}
    >
      <div className="page-header">
        <Heart size={32} className="text-secondary" />
        <h1 className="gradient-text">Your Wishlist</h1>
      </div>

      <div className="products-grid">
        <AnimatePresence mode="popLayout">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="empty-state"
              style={{ gridColumn: '1 / -1' }}
            >
              <Heart size={64} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
              <h3>Your wishlist is empty</h3>
              <p>Save items you love to find them easily later.</p>
              <Link to="/">
                <motion.button 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Products
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}