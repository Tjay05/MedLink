// import Menu from "./menu";
import arrow from "../../../assets/arrow.svg"
import icon from "../../../assets/Add-user.svg";
import avatar from "../../../assets/Avatar1.svg";
import refresh from "../../../assets/refreshlogo.png";
import { useEffect, useState } from "react";
 import { Link } from "react-router-dom";

const AddDoctor = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://hospital-management-backend.onrender.com/doctor/all")
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
    fetch("https://hospital-management-backend.onrender.com/doctor/all")
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
      {/* <Menu /> */}
      <div className="wrapAddDoc">
        <div className="thirdWrap">
          <header className="docHeader">
            <div className="left1">
              <p className="p1">list of doctors</p>

              <p className="p2">
                <span>{user.length}</span> doctors available
              </p>
            </div>
            <div className="refresh">
              <button onClick={refreshFromBackend}>
                <img src={refresh} alt="" id="imgRefresh" />
                Refresh
              </button>
            </div>

            {/* <Link style={{ textDecoration: "none" }} to="staff/doctor">
              <li>Doctor</li>
            </Link> */}
            <div className="btnright">
              <button id="doctor ">
                <img src={icon} alt="" id="frame" />
                <Link
                  style={{ textDecoration: "none"}}
                  to="/staff/doctor/docBasicInfo"
                >
                  <p>Add new doctor</p>
                </Link>
              </button>
              {/* <Outlet /> */}
            </div>
          </header>

          <div>
            <table>
              <thead>
                <th>Name</th> <br />
                <th> ID</th> <br />
                <th>Email</th>
                <br />
                <th>Phone Number</th>
                <th>Date Added</th>
                <th>STATUS</th>
                <th></th>
              </thead>
            </table>
          </div>

          {user.map((user) => (
            <div className="backend">
              <div className="hi">
                <img src={avatar} alt="" className="avatar" />

                <p className="firstName">
                  {user.firstname} {user.lastname}
                  <span className="light">{user.areaOfSpecialization}</span>
                </p>
              </div>
              <div id="">{user.id}</div>
              <div id="">{user.email}</div>
              <div id="">{user.number}</div>
              <div>
                <p id="getDate">{user.dateAdded}</p>
                <p className="light" id="time">
                  {user.timeAdded}
                </p>
              </div>
              <div className="active">
                {user.Status ? Active(
                  <button className="active1"> Active</button>
                ) : Offline(
                  <button className="offline1">Offline</button>
                )}
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Apiconsum()

export default AddDoctor;
