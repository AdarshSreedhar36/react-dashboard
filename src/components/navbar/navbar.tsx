import React from "react";
import UserDropdown from "../../shared-components/userdropdown/userdropdown";
import "./navbar.scss";
const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <h2>Welcome to Dashboard !!</h2>
      <UserDropdown />
    </div>
  );
};

export default Navbar;
