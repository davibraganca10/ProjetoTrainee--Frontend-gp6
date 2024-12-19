"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
  id: number;
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const decodeJWT = (token: string): any => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Erro ao decodificar o token JWT:', error);
    throw new Error('Token inválido');
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const decodeToken = (token: string) => {
    const decodedToken: any = decodeJWT(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      throw new Error("Token expirado");
    }

    return {
      id: decodedToken.sub,
      email: decodedToken.email,
    };
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token carregado:", token);
    if (token) {
      try {
        const userData = decodeToken(token);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Erro ao processar o token no carregamento:", error);
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  const login = (token: string) => {
    try {
      const userData = decodeToken(token);
      setUser(userData);
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Erro ao processar o token:", error);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("token");
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
