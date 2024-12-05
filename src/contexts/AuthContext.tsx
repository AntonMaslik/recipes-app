import { jwtDecode, JwtPayload } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

import authService from "services/auth.service";

interface AuthContextType {
  user: JwtPayload | null;
  token: string;
  login: (newToken: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<JwtPayload | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      setToken(accessToken);
    }

    if (accessToken) {
      try {
        const decodedUser: JwtPayload = jwtDecode(accessToken);
        setUser(decodedUser);
      } catch (error) {
        setUser(null);
      }
    }
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem("accessToken", newToken);
    setToken(newToken);

    try {
      const decodedUser = jwtDecode(newToken);
      setUser(decodedUser);
    } catch (error) {
      setUser(null);
    }
  };

  const logout = async () => {
    await authService.logout();
    localStorage.removeItem("accessToken");
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
