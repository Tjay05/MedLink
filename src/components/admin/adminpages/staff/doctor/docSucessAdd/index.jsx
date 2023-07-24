import checkimg from "../../../../../../assets/icons/checkimage.svg";
import { Link } from "react-router-dom";
import { RegdocContext } from "../../../../admincomponents/RegDoc";
import { useContext } from "react";

const DocAddSuccess = () => {

  const { message } = useContext(RegdocContext);

  return (
    <>
      <div className="wrapBasicInfo">
        <div className="secondWrap1">
          <div className="checkImg">
            <img src={checkimg} alt="" />
          </div>

          <div className="afterSubmit">
            <p> {message} </p>
          </div>
          <Link to="/adminhome/">
            <button className="done">
                <p>Done</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DocAddSuccess;
