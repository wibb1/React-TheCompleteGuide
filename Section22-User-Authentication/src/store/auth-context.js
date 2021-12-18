import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime)=>{
  const currentTime = new Date().getTime();
  const newExpirationTime = new Date(expirationTime).getTime()
  return newExpirationTime - currentTime
}

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken);

  const userLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(undefined);
    localStorage.removeItem('token')
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    const remainingTime = calculateRemainingTime(expirationTime)
    setTimeout(logoutHandler, remainingTime)
  };


  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
