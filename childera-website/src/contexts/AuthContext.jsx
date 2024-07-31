/* eslint-disable react/prop-types */
import { apiUrl } from "../constants/constants";
import { createContext, useContext, useEffect, useState } from "react";

const TOKEN_KEY = "auth-jwt";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authenticated: null,
    token: null,
    user: null,
    loading: true,
  });

  const setIsLoading = (loading) => {
    setAuthState((prev) => ({ ...prev, loading: loading }));
  };

  useEffect(() => {
    const loadToken = () => {
      const dataJSON = localStorage.getItem(TOKEN_KEY);
      if (!dataJSON) return;

      const data = JSON.parse(dataJSON);
      if (data.token && data.user) {
        setAuthState({
          token: data.token,
          authenticated: true,
          user: {
            email: data.user.email,
            id: data.user.id,
            name: data.user.name,
          },
        });
      }
    };

    setIsLoading(true);
    loadToken();
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}/blognames/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: email,
          password,
        }),
      });

      const data = await res.text();

      if (data !== "Login successful")
        return {
          success: false,
          message: data,
        };

      const user = {
        data: {
          token: "7227JLA2N2N3V9012B22B2B272992H2B2",
          user: {
            id: "1",
            name: "Child Era",
            email: email,
          },
        },
      };

      setAuthState({
        token: user.data.token,
        authenticated: true,
        user: {
          email: user.data.user.email,
          id: user.data.user.id,
          name: user.data.user.name,
        },
      });

      localStorage.setItem(
        TOKEN_KEY,
        JSON.stringify({
          token: user.data.token,
          user: {
            name: user.data.user.name,
            email: user.data.user.email,
            id: user.data.user.id,
          },
        })
      );

      return { success: true, message: "Credentials accepted!" };
    } catch (e) {
      return { success: false, message: "Server Error! Try Again" };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem(TOKEN_KEY);

    setAuthState({
      token: null,
      authenticated: false,
      user: null,
    });
  };

  const value = {
    onLogin: login,
    // onRegister: register,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
