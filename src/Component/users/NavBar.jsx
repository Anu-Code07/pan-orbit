import React, { useEffect, useRef, useState } from "react";
import "../../styles/nav.scss";
import { useNavigate } from "react-router-dom";
import chat from "../../assets/images/chat.png";
import downArrow from "../../assets/images/down-arrow.png";
import upArrow from "../../assets/images/up-arrow.png";
import useOnclickOutside from "react-cool-onclickoutside";
const NavBar = ({ userImg, userName, email, pathName }) => {
  const [showmenu, setShowMenu] = useState(false);
  const [randomuser, setRandomUser] = useState([]);
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(1);
  const [showChat, setShowChat] = useState(false);
  const menuRef = useOnclickOutside(() => setShowMenu(false));
  const chatRef = useOnclickOutside(() => setShowChat(false));
  const navigate = useNavigate();
  useEffect(() => {
    const popMenu = document.querySelector(".popMenu");
    const chatbox = document.querySelector(".chat-box");
    if (showmenu) {
      popMenu.style.display = "flex";
    } else {
      popMenu.style.display = "none";
    }
    if (showChat) {
      chatbox.style.height = "400px";
    } else {
      chatbox.style.height = "50px";
    }

    let randomUsers = localStorage.getItem("userList")
      ? JSON.parse(localStorage.getItem("userList"))
      : [];
    if (randomUsers.length) {
      setRandomUser(randomUsers?.filter((user) => user.name !== userName));
    }
    setRandomNumber1(Math.floor(Math.random() * 9));
    setRandomNumber2(Math.floor(Math.random() * 9));
  }, [showmenu, showChat]);

  return (
    <>
      <div className="nav">
        <h3>{pathName ? pathName?.split("/")[3] : ""}</h3>
        <div className="user">
          <div
            className="userImg"
            onClick={() => {
              if (showmenu) {
                setShowMenu(false);
              } else {
                setShowMenu(true);
              }
            }}
          >
            <img src={userImg} alt="" />
          </div>
          <div
            className="avatar"
            onClick={() => {
              if (showmenu) {
                setShowMenu(false);
              } else {
                setShowMenu(true);
              }
            }}
          >
            <p>{userName}</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="popMenu" ref={menuRef}>
        <div className="profile-pic">
          <img src={userImg} alt="" />
        </div>
        <div className="name-email">
          <p>{userName}</p>
          <p className="email-text">{email}</p>
        </div>
        <div id="line"></div>
        <div className="other">
          <div className="other-img">
            <img src={randomuser[randomNumber1]?.profilepicture} alt="" />
          </div>
          <div className="other-name">
            <p>{randomuser[randomNumber1]?.name}</p>
          </div>
        </div>
        <div id="line"></div>
        <div className="other">
          <div className="other-img">
            <img src={randomuser[randomNumber2]?.profilepicture} alt="" />
          </div>
          <div className="other-name">
            <p>{randomuser[randomNumber2]?.name}</p>
          </div>
        </div>
        <div className="button">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="chat-box" ref={chatRef}>
        <div
          className="icon_conatiner"
          onClick={() => {
            if (showChat) {
              setShowChat(false);
            } else {
              setShowChat(true);
            }
          }}
        >
          <div className="chat-icon">
            <img src={chat} alt="" height={40} width={40} />
            <h3
              style={{
                color: "#fff",
              }}
            >
              Chats
            </h3>
          </div>
          <div className="arrow">
            <img
              src={showChat ? downArrow : upArrow}
              alt="12"
              height={30}
              width={30}
            />
          </div>
        </div>
        <div className="chat-text_conatiner">
          {randomuser?.length
            ? randomuser?.map((user) => {
                return (
                  <div className="chats-list_conatiner">
                    <div className="chats-list">
                      <div className="chat-pic">
                        <img src={user.profilepicture} alt="" />
                      </div>
                      <div className="chat-name">
                        <p>{user.name}</p>
                      </div>
                    </div>
                    <div className="chat-dot"></div>
                  </div>
                );
              })
            : "No Chats to display"}
        </div>
      </div>
    </>
  );
};

export default NavBar;
