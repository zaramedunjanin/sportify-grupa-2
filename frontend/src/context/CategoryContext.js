// CategoryContenxt.js
import React, { createContext, useState } from "react";

export const CategoryContext = createContext();
const initialState = {
  min_price: null,
  max_price: null,
  location: null,
  sport: null,
  sortBy: null,
};
export const CategoryProvider = ({ children }) => {
  const [searchCriteria, setSearchCriteria] = useState(initialState);

  const updateCategory = (category_id) => {
    setSearchCriteria({ ...searchCriteria, ["sport"]: category_id });
  };

  return (
    <CategoryContext.Provider
      value={{ searchCriteria, updateCategory, setSearchCriteria }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
