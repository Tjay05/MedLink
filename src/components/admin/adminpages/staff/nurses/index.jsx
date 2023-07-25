import arrow from "../../../../../assets/icons/arrow.svg"
import icon from "../../../../../assets/icons/Add-user.svg";
import refresh from "../../../../../assets/icons/refreshlogo.png";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddNurse = ({ nuRse, setNuRse }) => {
  const [user, setUser] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch("https://hospital-management-backend.onrender.com/nurse/all")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const refreshFromBackend = () => {
    fetch("https://hospital-management-backend.onrender.com/nurse/all")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNxtPage = (user_Id) => {
    console.log('click');
    fetch(`https://hospital-management-backend.onrender.com/admin/particularPerson/${user_Id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setNuRse(data);
      console.log(nuRse);
      // history('nursedetails')
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="wrapAddDoc">
        <header className="docHeader">
          <div className="left1">
            <p className="p1">List of nurses</p>
            <p className="p2">
              <span>{user.length}</span> Nurses available
            </p>
          </div>
          <div className="refresh">
            <button onClick={refreshFromBackend}>
              <img src={refresh} alt="" />
              Refresh
            </button>
          </div>
          <div className="btnright">
            <Link to="../AddNurse">
              <button>
                <img src={icon} alt="" id="frame" />
                  <p>Add new nurse</p>
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
          <div className="allDocs" key={user._id}>
            <div className="PicProfile">
              <img src={user.avatar} alt="" />
              <div className="profile">
                <p className="firstName">{`${user.firstname} ${user.lastname}`}</p>
              </div>
            </div>
            <p>{user.id}</p>
            <p>{user.areaOfSpecialization}</p>
            <p>{user.number}</p>
            <div className="dateAdded">
              <p>{user.dateAdded}</p>
              <p className="light" >{user.timeAdded}</p>
            </div>
            <p className={user.Status === 'On Duty' ? 'active' : 'off-duty'}>{user.Status}</p>
            <img onClick={() => handleNxtPage(user._id)} className="arrow21" src={arrow} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

// Apiconsum()

export default AddNurse;
