import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import { useAuthStore } from "./store/authStore";
import { useQuery } from "@tanstack/react-query";
import Register from "./pages/Register/Register";

const App: React.FC = () => {
  const { isAuthenticated, checkAuth } = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: checkAuth,
    retry: false,
    staleTime: Infinity,
  });

  if (isLoading) {
  return  <div>Cargando app ...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
         <Route
          path="/register"  // Ruta para el registro
          element={<Register />}  // Componente de registro
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/home" : "login"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
