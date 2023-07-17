import checkimg from "../../../../../../assets/icons/checkimage.svg";
import { Link } from "react-router-dom";

const DocAddSuccess = () => {
  return (
    <>
      <div className="wrapBasicInfo">
        <div className="secondWrap1">
          <div className="checkImg">
            <img src={checkimg} alt="" />
          </div>

          <div className="afterSubmit">
            <p>
              You have Successfully Added (Dr's name). Check your email address
              for your unique ID
            </p>
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
