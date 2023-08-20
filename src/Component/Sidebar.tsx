import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/sidebar.scss";
/** To make th ecurve design i have used span with postion absolute  */


const Sidebar = () => {
  const [activetab, setActiveTab] = useState("profile");
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.pathname) {
      setActiveTab(location.pathname.split("/")[3]);
    }
  }, [location.pathname]);
  return (
    <div className="sidebar_container">
      <div className="sidebar_menu">
        <ul className="menu-item">
          <li className={activetab === "profile" ? "activetab" : ""}>
            <span className={activetab === "profile" ? "curve" : ""}></span>
            <NavLink to="profile">Profile</NavLink>
          </li>
          <div className="divider"></div>
          <li className={activetab === "posts" ? "activetab" : ""}>
            <span className={activetab === "posts" ? "curve" : ""}></span>
            <NavLink to="posts">Posts</NavLink>
          </li>
          <div className="divider"></div>
          <li className={activetab === "gallery" ? "activetab" : ""}>
            <span className={activetab === "gallery" ? "curve" : ""}></span>
            <NavLink to="gallery">Gallery</NavLink>
          </li>
          <div className="divider"></div>
          <li className={activetab === "todo" ? "activetab" : ""}>
            <span className={activetab === "todo" ? "curve" : ""}></span>
            <NavLink to="todo">ToDo</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
