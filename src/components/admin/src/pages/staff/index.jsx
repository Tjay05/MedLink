import { Link, Outlet, useLocation } from "react-router-dom";

const Staff = () => {
  const location = useLocation();

  // Check if the current URL matches the staff route but not the DocBasicInfo page
  const isStaffRoute =
    // location.pathname.startsWith("/staff" ) &&
    !location.pathname.includes("/staff/doctor/docBasicInfo") &&  !location.pathname.includes("/staff/doctor/docEnterDetails") && !location.pathname.includes("/staff/doctor/docServices") && !location.pathname.includes("/staff/doctor/docReview") && !location.pathname.includes("/staff/doctor/docSuccessAdd")  &&
    //the pharmacist part
     !location.pathname.includes("/staff/pharmarcist/pharmBasicInfo") &&  !location.pathname.includes("/staff/pharmarcist/pharmEnterDetails") && !location.pathname.includes("/staff/pharmarcist/pharmServices") && !location.pathname.includes("/staff/pharmarcist/pharmReview") && !location.pathname.includes("/staff/pharmarcist/pharmSuccessAdd")  &&
     //the nurse part
      !location.pathname.includes("/staff/nurses/nurseBasicInfo") &&  !location.pathname.includes("/staff/nurses/nurseEnterDetails") && !location.pathname.includes("/staff/nurses/nurseServices") && !location.pathname.includes("/staff/nurses/nurseReview") && !location.pathname.includes("/staff/nurses/nurseSuccessAdd")  &&
      //the lab-scientist part
       !location.pathname.includes("/staff/labScientist/labBasicinfo") &&  !location.pathname.includes("/staff/labScientist/labEnterDetails") && !location.pathname.includes("/staff/labScientist/labServices") && !location.pathname.includes("/staff/labScientist/labReview") && !location.pathname.includes("/staff/labScientist/labSuccessAdd") &&
       //the domestic worker part
        !location.pathname.includes("/staff/domesticWorkers/domBasicInfo") &&  !location.pathname.includes("/staff/domesticWorkers/domEnterDetails") && !location.pathname.includes("/staff/domesticWorkers/domServices") && !location.pathname.includes("/staff/domesticWorkers/domReview") && !location.pathname.includes("/staff/domesticWorkers/domSuccessAdd");

  return (
    <div>
      {isStaffRoute && (
        <nav>
          <ul className="menu">
            <Link style={{ textDecoration: "none" }} to="/staff/doctor">
              <li>Doctor</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/staff/pharmacist">
              <li>Pharmacists</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/staff/nurses">
              <li>Nurses</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/staff/labScientist">
              <li>Lab Scientists</li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/staff/domesticWorkers"
            >
              <li>Domestic Workers</li>
            </Link>
          </ul>
        </nav>
      )}
      
      <Outlet />
    </div>
  );
};

export default Staff;
