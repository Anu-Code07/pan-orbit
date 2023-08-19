import React from "react";
import { useNavigate } from "react-router-dom";

const Listofuser = ({ userImg, userName, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="listview_users"
      onClick={() => {
        navigate(`/user/${id}/profile`);
      }}
    >
      <div className="userImg">
        <img src={userImg} alt="user" />
      </div>
      <div className="username">
        <p>{userName}</p>
      </div>
    </div>
  );
};

export default Listofuser;
