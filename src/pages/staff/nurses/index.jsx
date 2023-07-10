// import Menu from "./menu";
import arrow from "../../../assets/arrow.svg";
import icon from "../../../assets/Add-user.svg";
import avatar from "../../../assets/Avatar1.svg";
import refresh from "../../../assets/refreshlogo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddNurse = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://learnhub-y2uf.onrender.com/mentor/all")
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
    fetch("https://learnhub-y2uf.onrender.com/mentor/all")
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
              <p className="p1">list of nurses</p>

              <p className="p2">
                <span>{user.length}</span> nursesavailable
              </p>
            </div>

            <div className="refresh">
              <button onClick={refreshFromBackend}>
                <img src={refresh} alt="" id="imgRefresh" />
                Refresh
              </button>
            </div>

            <div className="btnright">
              <button>
                <img src={icon} alt="" id="frame" />
                <Link
                  style={{ textDecoration: "none" }}
                  to="/staff/nurses/nurseBasicInfo"
                >
                  <p>Add new nurse</p>
                </Link>
              </button>
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
                  {user.firstName} {user.lastName}
                  <span className="light">Dermatologist</span>
                </p>
              </div>
              <div id="">87364523</div>
              <div id="">brooklyns@mail.com</div>
              <div id="">(603) 555-0123</div>
              <div>
                <p id="getDate">21/12/2022</p>
                <p className="light" id="time">
                  10:40 PM
                </p>
              </div>
              <div className="active">
                {user.Status ? (
                  <button className="active1"> Active</button>
                ) : (
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

export default AddNurse;
