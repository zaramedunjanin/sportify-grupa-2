import React from "react";
import { AuthProvider } from "./AuthContext";
import { SearchProvider } from "./SearchContext";
import { CategoryProvider } from "./CategoryContext";

const ContextWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <SearchProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </SearchProvider>
    </AuthProvider>
  );
};

export default ContextWrapper;
