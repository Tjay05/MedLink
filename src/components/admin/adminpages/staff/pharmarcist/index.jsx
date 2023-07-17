import arrow from "../../../../../assets/icons/arrow.svg"
import icon from "../../../../../assets/icons/Add-user.svg";
import avatar from "../../../../../assets/icons/Avatar1.svg";
import refresh from "../../../../../assets/icons/refreshlogo.png";
import fairAvatar from "../../../../../assets/icons/fairAvatar.svg"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddPharm = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://hospital-management-backend.onrender.com/pharmacist/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const refreshFromBackend = () => {
    fetch("https://hospital-management-backend.onrender.com/pharmacist/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="wrapAddDoc">
        <header className="docHeader">
          <div className="left1">
            <p className="p1">List of Pharmacists</p>
            <p className="p2">
              <span>{user.length}</span> pharmacist availble
            </p>
          </div>
          <div className="btnright">
            <Link to="../Addpharmacist">
              <button>
                <img src={icon} alt="" id="frame" />
                  <p>Add new pharmacist</p>
              </button>
            </Link>
          </div>
        </header>

        <div className="docs__info">
          <p>Name</p>
          <p>ID</p>
          <p>Rank</p>
          <p>Phone Number</p>
          <p>Date Added</p>
          <p>Status</p>
        </div>

        {user.map((user) => (
          <div className="allDocs">
            <div className="PicProfile">
              <img src={fairAvatar} alt=""/>
              <div className="profile">
                <p id="user">{user.firstname}</p>
              </div>
            </div>
            <p>{user.id}</p>
            <p>{user.UserType}</p>
            <p>000-call-rexxie</p>
            <div className="dateAdded">
              <p>21/03/23</p>
              <p className="light">10:40 pm</p>
            </div>
            <p className="active">{user.Status}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// Apiconsum()

export default AddPharm;