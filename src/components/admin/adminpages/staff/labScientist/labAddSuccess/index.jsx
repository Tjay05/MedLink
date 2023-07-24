import checkimg from "../../../../../../assets/icons/checkimage.svg";
import { Link } from "react-router-dom";
import { RegLabContext } from "../../../../admincomponents/RegLab";
import { useContext } from "react";

const LabAddSuccess = () => {

  const { message } = useContext(RegLabContext);

  return (
    <>
      <div className="wrapBasicInfo">
        <div className="secondWrap1">
          <div className="checkImg">
            <img src={checkimg} alt="" />
          </div>

          <div className="afterSubmit">
            <p>{message}</p>
          </div>
          <Link to="../../labScientist">
            <button className="done">
              <p>Done</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LabAddSuccess;