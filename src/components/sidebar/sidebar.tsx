import React from "react";
import UserDetail from "../../shared-components/userdetail/userdetail";
import ParentMenu from "../../shared-components/parent-menu/parentmenu";


const Sidebar: React.FC = () => {
    return(
        <div className="sidebar">
            <ParentMenu />
        </div>
    )
}


export default Sidebar;