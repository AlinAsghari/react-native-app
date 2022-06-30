import React from "react";
import jwtDecode from "jwt-decode";
import BimSecureStorage from "../helpers/BimSecureStorage";
import AuthContext from "../contexts/authContext";

export default useAuth = () => {
  const { user, setUser } = React.useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    BimSecureStorage.storeToken(authToken);
    return user;
  };

  const logOut = () => {
    setUser(null);
    BimSecureStorage.removeToken();
  };

  return { user, logIn, logOut };
};
