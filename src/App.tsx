import React from "react";
import "./index.scss"; // global styles
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import { AuthProvider } from "./context/auth-context";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
