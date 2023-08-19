import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/main.scss";
import Listofuser from "./users/Listofuser";
const Home = () => {
  const [userList, setUserList] = useState([]);
  const getUserList = async () => {
    try {
      const res = await axios.get("https://panorbit.in/api/users.json");
      setUserList(res.data.users);
      localStorage.setItem("userList", JSON.stringify(res.data.users));
    } catch (error) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    getUserList();
  }, []);
  console.log(userList);
  return (
    <div className="home_container">
      <div className="userList_container">
        <div className="userList-heading">
          <h3>Select an Account </h3>
        </div>
        <div className="userList">
          {userList?.length ? (
            userList.map((user, index) => {
              return (
                <Listofuser
                  userImg={user.profilepicture}
                  userName={user.name}
                  id={user.id}
                  key={index}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
