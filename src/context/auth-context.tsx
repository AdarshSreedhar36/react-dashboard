import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  username: string;
  setUsername: (name: string) => void;
  password: string;
  setPassword: (pass: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContext.Provider value={{ username, setUsername, password, setPassword }}>
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
