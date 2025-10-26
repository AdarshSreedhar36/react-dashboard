import React from "react";
import menus from "./menu.json";
import "./parentmenu.scss";
import UserDetail from "../userdetail/userdetail";


const ParentMenu: React.FC = () => {
  
  return (
    <div className="parentmenu">
      <UserDetail />

      <div className="menu-section">
        <ul>
          {menus?.map((sub) => (
            <li key={sub.id}>{sub.title}</li>
          ))}
        </ul>
      </div>

    
    </div>
  );
};

export default ParentMenu;
