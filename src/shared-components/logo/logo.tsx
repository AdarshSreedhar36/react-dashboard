import React from "react";
import logo from "../../assets/images/logo.png";
import "./logo.scss";
const Logo: React.FC = () => {
  return (
    <div className="logoContainer">
      <img src={logo} alt="App Logo" className="logoImage" width={100} height={100}/>
    </div>
  );
};

export default Logo;
