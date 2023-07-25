import arrow from "../../../../../assets/icons/arrow.svg"
import icon from "../../../../../assets/icons/Add-user.svg";
import refresh from "../../../../../assets/icons/refreshlogo.png";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddLabSci = ({ labWoRk, setLabWoRk }) => {
  const [user, setUser] = useState([]);
  const history = useNavigate()

  useEffect(() => {
    fetch("https://hospital-management-backend.onrender.com/lab-scientist/all")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const refreshFromBackend = () => {
    console.log('clicked on the button');
    fetch("https://hospital-management-backend.onrender.com/lab-scientist/all")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNxtPage = (user_Id) => {
    fetch(`https://hospital-management-backend.onrender.com/admin/particularPerson/${user_Id}`)
    .then((res) => res.json()) 
    .then((data) => {
      console.log(data);
      setLabWoRk(data);
      console.log(labWoRk);
      // history('labdetails')
    }) 
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <div className="wrapAddDoc">
        <header className="docHeader">
          <div className="left1">
            <p className="p1">List of Lab scientists</p>

            <p className="p2">
              <span>{user.length}</span> lab scientists available
            </p>
          </div>
          <div className="refresh">
            <button onClick={refreshFromBackend}>
              <img src={refresh} alt="" />
              Refresh
            </button>
          </div>
          <div className="btnright">
            <Link to="../AddLabSci">
              <button>
                <img src={icon} alt="" id="frame" />
                  <p>Add new lab Scientist</p>
              </button>
            </Link>
          </div>
        </header>

        <div className="docs__info" >
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
              <img src={user.avatar} alt="" className="avatar" />
              <div className="profile">
                <p>{`${user.firstname} ${user.lastname}`}</p>
              </div>
            </div>
            <p>{user.id}</p>
            <p>{user.areaOfSpecialization}</p>
            <p>{user.number}</p>
            <div className="dateAdded">
              <p>{user.dateAdded}</p>
              <p className="light">{user.timeAdded}</p>
            </div>
            <p className={user.Status === 'On Duty' ? 'active' : 'off-duty'}>{user.Status}</p>
            <img onClick={()=>handleNxtPage(user._Id)} className="arrow21" src={arrow} alt="" />
          </div>
        ))} 
      </div>
    </>
  );
};

// Apiconsum()

export default AddLabSci;
