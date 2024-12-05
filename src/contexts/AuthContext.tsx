import { createContext, useContext, useEffect, useState } from "react";

import { User } from "@apollo-custom/types/user";
import authService from "services/auth.service";

interface AuthContextType {
  user: User | null;
  token: string;
  login: (newToken: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");

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
      const userDb: User = await authService.getMe();
      localStorage.setItem("userDb", JSON.stringify(userDb));
      setUser(userDb);
    } catch (error) {
      setUser(null);
    }
  };

  const logout = async () => {
    await authService.logout();

    localStorage.removeItem("accessToken");
    localStorage.removeItem("userDb");

    setToken("");
    setUser(null);
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
