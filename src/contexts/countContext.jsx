import { createContext, useState, useContext } from "react";

export const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, SetCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, SetCount }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCount = () => {
  return useContext(CountContext);
};
