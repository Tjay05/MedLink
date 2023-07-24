import checkimg from "../../../../../../assets/icons/checkimage.svg";
import { Link } from "react-router-dom";
import { RegPharmacistContext } from "../../../../admincomponents/RegPharmacist";
import { useContext } from "react";

const PharmSuccessAdd = () => {

  const { message } = useContext(RegPharmacistContext);

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
          <Link to="../../pharmacist" >
            <button className="done">
              <p>Done</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PharmSuccessAdd;
