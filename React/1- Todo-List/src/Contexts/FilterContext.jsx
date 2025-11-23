// Hooks
import { createContext, useState, useContext } from "react";

const FilterContext = createContext("");

export function FilterProvider({ children }) {
  // States Hook usage
  const [filter, setFilter] = useState("All");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
