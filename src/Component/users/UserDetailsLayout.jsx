import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
const UserDetails = () => {
  const params = useParams();
  const [userDetails, setUserDetails] = useState([]);
  const getUserDetails = async (id) => {
    let usersArray = localStorage.getItem("userList")
      ? JSON.parse(localStorage.getItem("userList"))
      : [];
    if (usersArray?.length) {
      let currentuser = usersArray?.filter((user) => user.id === parseInt(id));
      setUserDetails(currentuser);
    } else {
      setUserDetails([]);
    }
  };

  console.log(params.id);
  useEffect(() => {
    getUserDetails(params.id);
  }, [params.id]);
  console.log(userDetails);
  const menuItem = [
    {
      to: "/profile",
      name: "Profile",
    },
    {
      to: "#",
      name: "Post",
    },
    {
      to: "#",
      name: "Gallery",
    },
    {
      to: "#",
      name: "Todo",
    },
  ];
  return (
    <div className="user_details_container">
      <Sidebar />
      <div className="details_page">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDetails;
