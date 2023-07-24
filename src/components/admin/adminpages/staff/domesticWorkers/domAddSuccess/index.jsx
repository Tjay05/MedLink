import checkimg from "../../../../../../assets/icons/checkimage.svg";
import { Link } from "react-router-dom";
import { RegDomContext } from "../../../../admincomponents/RegDomWorker";
import { useContext } from "react";

const DomSuccessAdd = () => {

  const { message } = useContext(RegDomContext);

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
          <Link to="../../domesticWorkers">
            <button className="done">
              <p>Done</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DomSuccessAdd;
