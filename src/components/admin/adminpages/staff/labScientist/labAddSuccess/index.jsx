import LabMenu from "../labBasicInfo/LabMenu";
import checkimg from "../../../../assets/checkimage.svg";
import { Link } from "react-router-dom";

const LabAddSuccess = () => {
  return (
    <>
      <LabMenu />
      <div className="wrapBasicInfo">
        <div className="secondWrap1">
          <div className="checkImg">
            <img src={checkimg} alt="" />
          </div>

          <div className="afterSubmit">
            <p>
              You have Successfully Added (Lab Scientist name). Check your email
              address for your unique ID
            </p>
          </div>
          <button className="done">
          <Link
              style={{ textDecoration: "none" }}
              to="/staff/labScientist"
            >
              <p>Done</p>
            </Link>
            </button>
        </div>
      </div>
    </>
  );
};

export default LabAddSuccess;