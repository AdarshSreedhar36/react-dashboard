import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userdropdown.scss";
import { useLogin } from "../../custom-hooks/use-login.hook";
import { useAuth } from "../../context/auth-context";
import LoginImage from "../../assets/images/dashboard.svg";

const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { username } = useLogin();
  const navigate = useNavigate();
  const { setUsername, setPassword } = useAuth();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setIsOpen(false);
    navigate("/");
  };

  return (
    <div className="user-dropdown-container">
      <div className="user-avatar" onClick={toggleDropdown}>
        <img src={LoginImage} alt="login_name" />
      </div>
      {isOpen && (
        <div className="user-dropdown-menu">
          <div className="user-info">
            <h4>{username}</h4>
            <span className="role">Admin</span>
          </div>
          <ul className="dropdown-list">
            {dropdownItems.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
            <li className="logout" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;

const dropdownItems = [
  { id: 1, label: "My Profile" },
  { id: 2, label: "Messages" },
  { id: 3, label: "Notifications" },
  { id: 4, label: "Settings" },
];
