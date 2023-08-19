import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import { useParams, useLocation } from "react-router-dom";
import MAP from "../../../assets/images/map.png";
import "../../../styles/profile.scss";
const Profile = () => {
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
    <div className="profile_conatiner">
      <NavBar
        userImg={userDetails[0]?.profilepicture}
        userName={userDetails[0]?.name}
        email={userDetails[0]?.email}
        pathName={location.pathname}
      />
      <div className="profile_details">
        <div className="profile-pic">
          <div className="nameimg">
            <div className="userImg">
              <img src={userDetails[0]?.profilepicture} alt="" srcset="" />
            </div>
            <h3>{userDetails[0]?.name}</h3>
          </div>

          <div className="info">
            <div className="user-info">
              <div className="key-value">
                <p>username :</p>

                <h3>{userDetails[0]?.name}</h3>
              </div>
              <div className="key-value">
                <p>e-mail :</p>

                <h3>{userDetails[0]?.email}</h3>
              </div>
              <div className="key-value">
                <p>Phone :</p>

                <h3>{userDetails[0]?.phone.split("x")[0]}</h3>
              </div>
              <div className="key-value">
                <p>Website :</p>

                <h3> {userDetails[0]?.website}</h3>
              </div>
            </div>
            <div className="divider-line"></div>
            <div className="company-info">
              <p style={{ textAlign: "center" }}>Company</p>
              <div className="key-value">
                <p>Name</p>

                <h3>{userDetails[0]?.company.name}</h3>
              </div>
              <div className="key-value">
                <p>catchphrase </p>

                <h3
                  style={{
                    width: "50%",
                  }}
                >
                  {userDetails[0]?.company.catchPhrase}
                </h3>
              </div>
              <div className="key-value">
                <p>bs </p>

                <h3
                  style={{
                    width: "60%",
                  }}
                >
                  {userDetails[0]?.company.bs}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="address">
          <div className="addres-text">
            <h3>Address:</h3>
            <div className="address-info">
              <div className="key-value">
                <p>Street : </p>
                <h3>{userDetails[0]?.address.street}</h3>
              </div>
              <div className="key-value">
                <p>Suite : </p>
                <h3>{userDetails[0]?.address.suite}</h3>
              </div>
              <div className="key-value">
                <p>City : </p>
                <h3>{userDetails[0]?.address.city}</h3>
              </div>
              <div className="key-value">
                <p>ZipCode : </p>
                <h3>{userDetails[0]?.address.zipcode}</h3>
              </div>
            </div>
          </div>
          <div className="address_map">
            <img src={MAP} alt="" srcset="" />
          </div>
          <div className="lat">
            <div className="text-lat">
              <p>Lat:</p>
              <span className="latval">{userDetails[0]?.address.geo.lat}</span>
            </div>
            <div className="text-lat">
              <p>Long:</p>
              <span className="latval">{userDetails[0]?.address.geo.lng}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
