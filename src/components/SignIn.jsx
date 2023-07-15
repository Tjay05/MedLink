import { NavLink, Outlet, useNavigate } from "react-router-dom";

const SignIn = ({ hospitalId, adminId, adminPassword, pharmId, pharmPword, labId, labPassword, docId, docPword, data, setData }) => {  

  const history = useNavigate();
 
  const loginButtonClicked = () => {
    console.log("Login button clicked");
    
    if(location.pathname.includes("/doctor")){
      
      history('/dochome/');
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

          setData(await response.json());
          // const message  = response.json()
      //  console.log(data);
          if (response.ok) {
            console.log(data);
          } else {
            if( data){
              try {
                setData(data.message)
                console.log('errorrr', data.message)
                
              } catch (error) {
                console.log(error);
              }
            }
            // errorMessage.TextContent = data.message
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
  
      signup()
      console.log(docId, docPword);

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
    } else{
      const signup = async (userData) => {
        try {
          history()
          // Make API request to signup endpoint
          const response = await fetch('https://hospital-management-backend.onrender.com/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: adminId,
              password: adminPassword,
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
      console.log(hospitalId, adminId, adminPassword);
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
