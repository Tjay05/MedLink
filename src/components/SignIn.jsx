import { NavLink, Outlet, useNavigate } from "react-router-dom";

const SignIn = ({ hospitalId, adminId, adminPassword, pharmId, pharmPword, labId, labPassword, docId, docPword, data, setData, adminData, setAdminData }) => {  

  const history = useNavigate();
 
  const loginButtonClicked = () => {    
    if(location.pathname.includes("/doctor")){
      console.log('clicked on admin login');

      const signup = async (userData) => {
        try {

          const response = await fetch('https://hospital-management-backend.onrender.com/doctor/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: docId,
              password: docPword,
            }),
          });
          const data = await response.json()
          setData(data);
          if (response.ok) {
            history('/docHome/')
            localStorage.setItem('doctor', JSON.stringify({
              firstname: data.firstname,
              lastname: data.lastname,
              email: data.email,
              areaOfSpecialization: data.areaOfSpecialization,
              med_License_number: data.med_License_number,
              appointments: data.appointments,
              today:data.appointmentsToday,
              id: data.id,
              _id:data._id
            }));            
          } else if(response.status === 401) {
                setData(data)
                console.log('error for 401 ', data)
            }else if (response.status === 404){
              setData(data)
                console.log('error', data)
            }else{
              setData('could not login doctor')
            }
          }
         catch (error) {
          console.log('Error:', error);
        }
      };
  
      signup()

    } else if(location.pathname.includes("/pharm")){
      const signup = async (userData) => {
        try {
          // Make API request to signup endpoint
          const response = await fetch('https://hospital-management-backend.onrender.com/pharmacist/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: pharmId,
              password: pharmPword,
            }),
          });

          setData(await response.json());
          const message = response.json()
      //  console.log(data);
          if (response.ok) {
            console.log(data);
          } else {
            console.log('errorrr', data)
            // errorMessage.TextContent = data.message
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
  
      signup()
      console.log(pharmId, pharmPword);
    } else   if(location.pathname.includes("/lab")){
      const signup = async (userData) => {
        try {
          // Make API request to signup endpoint
          const response = await fetch('https://hospital-management-backend.onrender.com/lab-scientist/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: labId,
              password: labPassword,
            }),
          });

          setData(await response.json());
          // const message = response.json()
      //  console.log(data);
          if (response.ok) {
            console.log(data);
          } else {
            console.log('errorrr', data)
            // errorMessage.TextContent = data.message
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
  
      signup()
      console.log(labId, labPassword);
    } else if (location.pathname.includes("/")){
      console.log('clicked on admin login')

      const signup = async (userData) => {
        try {
          
          const response = await fetch('https://hospital-management-backend.onrender.com/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: adminId,
              password: adminPassword,
              hospitalId
            }),
          });
          const adminData = await response.json()
          setAdminData(adminData);
          if (response.ok) {
            history('/adminhome/');
            localStorage.setItem('admin', JSON.stringify({
              firstname: adminData.firstname,
              lastname: adminData.lastname,
              appointments: adminData.appointments,
              id: adminData.id,
              _id:adminData._id
            }));           
          } else if(response.status === 401) {
                setAdminData(adminData)
                console.log('error for 401', adminData);
          } else if(response.status === 404) {
                setAdminData(adminData)
                console.log('error', adminData);
          } else {
            setAdminData('Could not login Admin')
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
  
      signup()
    }
  };

  return (
    <div className="container">
      <nav className="brand-name">
        <h1>
          <span className="white-line">Me</span>dli<span className="red-line">nk</span>
        </h1>
      </nav>
      <div className="content">
        <h2>Sign In</h2>
        <Outlet />
      </div>
      <footer className="med-personnels">
        <ul className="nav-footer">
          <li className="none">
            <NavLink to="./">Admin</NavLink>
          </li>
          <li>
            <NavLink to="pharm" >Pharm</NavLink>
          </li>
          <li>
            <NavLink to="lab">Lab</NavLink>
          </li>
          <li className="active">
            <NavLink to="doctor" >Doctor</NavLink>
          </li>
        </ul>
        <button onClick={loginButtonClicked}>Login</button>
      </footer>
    </div>
  );
};

export default SignIn;
