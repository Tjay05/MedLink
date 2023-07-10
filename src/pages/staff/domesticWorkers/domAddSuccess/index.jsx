
import DomMenu from "../domWorkBasicInfo/DomMenu";
import checkimg from "../../../../assets/checkimage.svg";
import { Link } from "react-router-dom";

const DomSuccessAdd = () => {
  return (
    <>
      <DomMenu />
      <div className="wrapBasicInfo">
        <div className="secondWrap1">
          <div className="checkImg">
            <img src={checkimg} alt="" />
          </div>

          <div className="afterSubmit">
            <p>
              You have Successfully Added (Domestic worker's name). Check your email
              address for your unique ID
            </p>
          </div>
          <button className="done">
            <Link style={{ textDecoration: "none" }} to="/staff/domesticWorkers">
              <p>Done</p>
            </Link>
            </button>
        </div>
      </div>
    </>
  );
};

export default DomSuccessAdd;