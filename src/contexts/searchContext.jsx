import { createContext, useState, useContext } from "react";

export const SearchContext = createContext({});

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");

  function foundItem(products) {
    return products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <SearchContext.Provider value={{ search, setSearch, foundItem }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  return useContext(SearchContext);
};
