import checkimg from "../../../../../../assets/icons/checkimage.svg";
import { Link } from "react-router-dom";
import { RegNurseContext } from "../../../../admincomponents/RegNurse";
import { useContext } from "react";

const NurseAddSuccess = () => {

  const { message } = useContext(RegNurseContext);

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
          <Link to="../../nurse">
            <button className="done">
              <p>Done</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NurseAddSuccess;
