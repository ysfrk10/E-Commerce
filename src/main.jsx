import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./pages/error-page";
import CartPage from "./pages/cartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./contexts/APIDataContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // ← دي معناها أول صفحة (/)
        element: <HomePage />,
      },
      {
        path: "/cart/:id",
        element: <CartPage />,
      },
      {
        path: "/productPage/:id",
        element: <ProductPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </CartProvider>
  </StrictMode>
);
