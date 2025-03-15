import { Children, createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};


//AUth provider
export const AuthProvider = ({ Children }) => {
  const value = {};
  return <AuthContext.Provider>{Children}</AuthContext.Provider>;
};
