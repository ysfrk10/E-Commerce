import { createContext, useEffect } from "react";
import { useState, useContext } from "react";
import axios from "axios";

export const DataContext = createContext({});

export function DataProvider({ children }) {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ Data, setData, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
