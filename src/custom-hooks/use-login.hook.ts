import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const useLogin = () => {
  const { username, setUsername, password, setPassword } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const staticUser = "adarsh";
    const staticPass = "12345";

    if (username === staticUser && password === staticPass) {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password!");
    }
  };

  return { username, setUsername, password, setPassword, handleLogin };
};
