import arrow from "../../../../../assets/icons/arrow.svg"
import icon from "../../../../../assets/icons/Add-user.svg";
import refresh from "../../../../../assets/icons/refreshlogo.png";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddDoctor = ({ pers, setPers }) => {
  const [user, setUser] = useState([]);
  const history = useNavigate();

  useEffect( () => {
    fetch("https://hospital-management-backend.onrender.com/doctor/all")
      .then((res) => res.json())
      .then((data) => {
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
      setPers(data);
      history('docdetails/')
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
            <p className="p1">List of Doctors</p>
            <p className="p2">
              <span>{user.length}</span> Doctors Available
            </p>
          </div>
          <div className="refresh">
            <button onClick={()=>refreshFromBackend()}>
              <img src={refresh} alt="" />
              Refresh
            </button>
          </div>
          <div className="btnright">
            <Link to="AddDoctor">
              <button id="doctor ">
                <img src={icon} alt="" id="frame" />
                  <p>Add new doctor</p>
              </button>
            </Link>
          </div>
        </header>

        <div className="docs__info" >
          <p>Name</p>
          <p>ID</p>
          <p>Email</p>
          <p>Phone Number</p>
          <p>Date Added</p>
          <p>Status</p>
        </div>

        {user.map((user) => (
          
          <div className="allDocs" key={user.id}>
            <div className="PicProfile">
              <img src={user.avatar} alt="" />
              <div className="profile">
                <p id="user">{`${user.firstname} ${user.lastname}`}</p>
                <p id="profession">{user.areaOfSpecialization}</p>
              </div>
            </div>  
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.number}</p>
            <div className="dateAdded">
              <p>{user.dateAdded}</p>
              <p className="light">{user.timeAdded}</p>
            </div>
            <p className={user.Status === 'Active' ? 'active' : 'off-duty'}>{user.Status}</p>
            <img onClick={()=>handleNxtPage(user._id)} className="arrow21" src={arrow}  alt="" />
          </div>
          )
          )
        }
      </div>
    </>
  );
};

// Apiconsum()

export default AddDoctor;
