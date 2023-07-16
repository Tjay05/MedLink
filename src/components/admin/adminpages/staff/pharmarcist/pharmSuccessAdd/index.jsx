import checkimg from "../../../../../../assets/icons/checkimage.svg";
import { Link } from "react-router-dom";

const PharmSuccessAdd = () => {
  return (
    <>
      <div className="wrapBasicInfo">
        <div className="secondWrap1">
          <div className="checkImg">
            <img src={checkimg} alt="" />
          </div>

          <div className="afterSubmit">
            <p>
              You have Successfully Added (Pharm’s name). Check your email
              address for your unique ID
            </p>
          </div>
          <button className="done">
            <Link
              style={{ textDecoration: "none" }}
              to="../pharmacist"
            >
              <p>Done</p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default PharmSuccessAdd;
