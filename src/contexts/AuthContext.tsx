import { createContext, useContext, useEffect, useState } from "react";
import { QueryResult } from "@apollo/client";

import { User } from "@custom-types/user";
import { useGetMe, useLogout } from "hooks/auth.hook";

export interface AuthContextType {
  user: User | null;
  token: string;
  login: (newToken: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext: React.Context<AuthContextType | null> =
  createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");

  const { logout: logoutFun } = useLogout();
  const { getUser } = useGetMe();

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem("accessToken");
    const userDb: string | null = localStorage.getItem("userDb");

    if (accessToken) {
      setToken(accessToken);
    }

    if (userDb) {
      const storedUser: User = JSON.parse(
        localStorage.getItem("userDb") || "{}"
      );
      setUser(storedUser);
    }
  }, []);

  const login = async (newToken: string) => {
    localStorage.setItem("accessToken", newToken);
    setToken(newToken);

    try {
      const queryResultUser: QueryResult = await getUser();

      if (queryResultUser.data.getMe) {
        localStorage.setItem(
          "userDb",
          JSON.stringify(queryResultUser.data.getMe)
        );

        setUser(queryResultUser.data.getMe);
      }
    } catch (error) {
      setUser(null);
    }
  };

  const logout = async () => {
    const data: boolean | null = await logoutFun();

    if (data) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userDb");
      setToken("");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
