import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState(0);

  return (
    <CategoryContext value={{ category, setCategory }}>
      {children}
    </CategoryContext>
  );
}

export const useCategory = () => useContext(CategoryContext);
