import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ShoppingCart, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useContext(StoreContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container"
      style={{ padding: '4rem 2rem' }}
    >
      <div className="page-header">
        <ShoppingCart size={32} className="text-primary" />
        <h1 className="gradient-text">Your Cart</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: cart.length > 0 ? '1fr 350px' : '1fr', gap: '3rem' }}>
        <div className="cart-items">
          <AnimatePresence mode="popLayout">
            {cart.length > 0 ? (
              cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="glass"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem', 
                    padding: '1.5rem', 
                    borderRadius: '24px',
                    marginBottom: '1rem'
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '16px' }} 
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.category}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.1, color: '#f43f5e' }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div className="empty-state">
                <ShoppingBag size={64} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <Link to="/">
                  <motion.button 
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Shopping
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {cart.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass" 
            style={{ padding: '2rem', borderRadius: '32px', height: 'fit-content', position: 'sticky', top: '120px' }}
          >
            <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
              <span style={{ color: '#16a34a' }}>Free</span>
            </div>
            <div style={{ height: '1px', background: 'var(--glass-border)', margin: '1.5rem 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700' }}>
              <span>Total</span>
              <span className="gradient-text">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <motion.button 
              className="btn-primary" 
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Checkout <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}