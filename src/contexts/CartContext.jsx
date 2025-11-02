import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Invalid JSON in localStorage:", err);
      localStorage.removeItem("cart");
      return [];
    }
  });
  const addToCart = (product) => {
    console.log("added:", product);
    setCart((prev) => [...prev, product]);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
