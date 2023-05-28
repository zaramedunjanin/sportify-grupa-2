// SearchContext.js
import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (text) => {
    setSearchText(text);
  };

  return (
    <SearchContext.Provider value={{ searchText, updateSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
