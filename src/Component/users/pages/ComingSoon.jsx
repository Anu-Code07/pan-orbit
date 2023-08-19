import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import { useParams, useLocation } from "react-router-dom";
const ComingSoon = () => {
  const [userDetails, setUserDetails] = useState([]);
  const params = useParams();
  const location = useLocation();
  console.log();
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

  useEffect(() => {
    getUserDetails(params.id);
  }, [params.id]);
  return (
    <>
      {" "}
      <NavBar
        userImg={userDetails[0]?.profilepicture}
        userName={userDetails[0]?.name}
        email={userDetails[0]?.email}
        pathName={location.pathname}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `70%`,
          color: "#EEEEEE",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
          }}
        >
          Coming Soon
        </h1>
      </div>
    </>
  );
};

export default ComingSoon;
