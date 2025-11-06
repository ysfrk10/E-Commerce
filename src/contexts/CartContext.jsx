import { createContext, useState, useContext } from "react";
import { useCount } from "./countContext";
export const CartContext = createContext({});

export function CartProvider({ children }) {
  const { count, setCount } = useCount();
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
    const existProduct = cart.find((item) => item.id === product.id); //true ,false
    let updatedCart;
    if (existProduct) {
      updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          setCount(1);
          return { ...item, exist: item.exist + count };
        } else {
          return item;
        }
      });
    } else {
      setCount(1);
      const newProduct = { ...product, exist: 1 };
      updatedCart = [...cart, newProduct];
      console.log(
        "added from context else case:",
        "new",
        newProduct,
        "updated",
        updatedCart
      );
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
// import { createContext, useState, useContext } from "react";
// export const CartContext = createContext({});

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState(() => {
//     try {
//       const saved = localStorage.getItem("cart");
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Invalid JSON in localStorage:", err);
//       localStorage.removeItem("cart");
//       return [];
//     }
//   });
//   const addToCart = (product) => {
//     const existProduct = cart.find((item) => {
//       item.id === product.id;
//     });
//     let updatedCart;

//     if (existProduct) {
//       // لو موجود، نزود الكمية
//       setCart(
//         cart.map((item) =>
//           item.id === product.id ? { ...item, count: item.count + 1 } : item
//         )
//       );
//     } else {
//       updatedCart = [...cart, { ...product, count: 1 }];
//     }
//     setCart(updatedCart);

//     console.log("added:", product);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <CartContext.Provider value={{ cart, setCart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => {
//   return useContext(CartContext);
// };
