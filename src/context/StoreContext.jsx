import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      document.body.className = newTheme;
      return newTheme;
    });
  };

  return (
    <StoreContext.Provider
      value={{ cart, setCart, wishlist, setWishlist, theme, toggleTheme }}
    >
      {children}
    </StoreContext.Provider>
  );
};