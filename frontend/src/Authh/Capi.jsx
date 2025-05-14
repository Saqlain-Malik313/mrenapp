import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, settoken] = useState(localStorage.getItem("token"));
  let isLoggedin = !!token;

  const StoreToken = (servertoken) => {
    localStorage.setItem("token", servertoken);
    settoken(servertoken); 
  };

  const saveid = (id) => {
    return localStorage.setItem("ID", id);
  };

  const Logoutuser = () => {
    settoken(null);
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedin, StoreToken, Logoutuser, saveid }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
