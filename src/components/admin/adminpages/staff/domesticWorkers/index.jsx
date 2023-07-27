import arrow from "../../../../../assets/icons/arrow.svg"
import icon from "../../../../../assets/icons/Add-user.svg";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const AddDomesticWorkers = ({ domWk, setDomWk }) => {
  const [user, setUser] = useState([]);
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://hospital-management-backend.onrender.com/domestic-worker/all")
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
    fetch("https://hospital-management-backend.onrender.com/domestic-worker/all")
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
    console.log('click');
    fetch(`https://hospital-management-backend.onrender.com/admin/particularPerson/${user_Id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setDomWk(data);
      console.log(domWk);
      history('../domworkerdetails/')
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
            <p className="p1">List of Domestic Workers</p>
            <p className="p2">
              <span>{user.length}</span> Domestic Workers Available
            </p>
          </div>
          {/* <div className="refresh">
            <button onClick={()=>refreshFromBackend()}>
              <img src={refresh} alt="" id="imgRefresh" />
              Refresh
            </button>
          </div> */}
          <div className="btnright">
            <Link to="../AddDomWorker">
              <button>
                <img src={icon} alt="" id="frame" />
                  <p>Add domestic worker</p>
              </button>
            </Link>
          </div>
        </header>

        <div className="docs__info" >
          <p>Name</p>
          <p>ID</p>
          <p>Role</p>
          <p>Phone Number</p>
          <p>Date Added</p>
          <p>Status</p>
        </div>

        <div className="loaded">{isLoading && <ClipLoader color="#3124ff" className="loadImg" loading={isLoading} size={50} />}</div>

        {user && user.map((user) => (
          <div className="allDocs" key={user._id}>
            <div className="PicProfile">
              <img src={user.avatar} alt="" />
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
            <img onClick={() => handleNxtPage(user._id)} className="arrow21" src={arrow} alt="" />
          </div>
        ))} 
      </div>
    </>
  );
};

// Apiconsum()

export default AddDomesticWorkers;
