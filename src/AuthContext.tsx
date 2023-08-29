// src/AuthContext.tsx

import React, { createContext, useState, useContext } from "react";
import { fakeLogin, fakeRegister, fakeLogout } from "./fakeApi";

interface IAuthContext {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    const token = await fakeLogin(username, password);
    setToken(token);
  };

  const register = async (username: string, password: string) => {
    const token = await fakeRegister(username, password);
    setToken(token);
  };

  const logout = () => {
    fakeLogout();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
