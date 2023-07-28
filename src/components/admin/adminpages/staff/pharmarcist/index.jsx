import arrow from "../../../../../assets/icons/arrow.svg"
import icon from "../../../../../assets/icons/Add-user.svg";
import refresh from "../../../../../assets/icons/refreshlogo.png";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const AddPharm = ({ pharM, setPharM }) => {
  const [user, setUser] = useState([]);
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://hospital-management-backend.onrender.com/pharmacist/all")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  const refreshFromBackend = () => {
    setIsLoading(true);
    fetch("https://hospital-management-backend.onrender.com/pharmacist/all")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleNxtPage = (user_Id) => {
    fetch(`https://hospital-management-backend.onrender.com/admin/particularPerson/${user_Id}`)
    .then((res) => res.json()) 
    .then((data) => {
      setPharM(data);
      history('../pharmdetails/')
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
            <p className="p1">List of Pharmacists</p>
            <p className="p2">
              <span>{user.length}</span> pharmacist availble
            </p>
          </div>
          <div className="refresh">
            <button onClick={refreshFromBackend}>
              <img src={refresh} alt="" />
              Refresh
            </button>
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

        <div className="loaded">{isLoading && <ClipLoader color="#35693f" className="loadImg" loading={isLoading} size={60} />}</div>

        {user && user.map((user) => (
          <div className="allDocs" key={user._id}>
            <div className="PicProfile">
              <img src={user.avatar} alt=""/>
              <div className="profile">
                <p id="user">{`${user.firstname} ${user.lastname}`}</p>
              </div>
            </div>
            <p>{user.id}</p>
            <p>{user.UserType}</p>
            <p>{user.number}</p>
            <div className="dateAdded">
              <p>{user.dateAdded}</p>
              <p className="light">{user.timeAdded}</p>
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

export default AddPharm;
