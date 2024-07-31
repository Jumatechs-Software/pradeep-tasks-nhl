import { apiUrl } from "@/constants/constant";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthState = {
  user: {
    name: string;
    email: string;
    id: string;
  } | null;
  token: string | null;
  authenticated: boolean | null;
};

type TResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
};
interface IAuthContextProps {
  authState: AuthState;
  onRegister?: (
    name: string,
    email: string,
    password: string
  ) => Promise<TResponse<AuthState>>;
  onLogin?: (email: string, password: string) => Promise<TResponse<AuthState>>;
  onLogout?: () => void;
}

const TOKEN_KEY = "my-jwt";

// const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const AuthContext = createContext<IAuthContextProps>({
  authState: {
    authenticated: false,
    token: null,
    user: null,
  },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authState, setAuthState] = useState<AuthState>({
    authenticated: null,
    token: null,
    user: null,
  });

  useEffect(() => {
    const loadToken = () => {
      const dataJSON = localStorage.getItem(TOKEN_KEY);
      if (!dataJSON) return;

      const data: AuthState = JSON.parse(dataJSON!);
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

    loadToken();
  }, []);

  //   const register = async (name: string, email: string, password: string) => {
  //     try {

  //       setAuthState({
  //         token: res.data.token,
  //         authenticated: true,
  //         user: {
  //           email: res.data.user.email,
  //           id: res.data.user.id,
  //           name: res.data.user.name,
  //         },
  //       });

  //       await setItemAsync(
  //         TOKEN_KEY,
  //         JSON.stringify({
  //           token: res.data.token,
  //           user: {
  //             name: res.data.user.name,
  //             email: res.data.user.email,
  //             id: res.data.user.id,
  //           },
  //         })
  //       );

  //       return res.data;
  //     } catch (e) {
  //       return { success: false, msg: (e as any).response.data.message };
  //     }
  //   };

  const login = async (email: string, password: string) => {
    try {
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
      console.log(e);
      return { success: false, message: "Error Occurred!" };
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
