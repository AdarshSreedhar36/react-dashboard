import React from "react";
import { useLogin } from "../../custom-hooks/use-login.hook";
import "./userdetail.scss";
const UserDetail: React.FC = () => {
  const { username } = useLogin();
  return (
    <div className="usersection">
      <div className="userinfo">
        <span className="userlogo">A</span>
      </div>
      <div className="userdetail">
        <h3>{username} </h3>
        <span className="useronline">Online</span>
      </div>
    </div>
  );
};

export default UserDetail;
