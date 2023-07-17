import dots from "../../../../../../assets/icons/Dots.svg";
const PharmMenu = () => {
  return (
    <div className="docMenu">
      <p>Pharmacist</p>
      <p>
        <img src={dots} id="dot" />
      </p>
      <p className="p">Add a New Pharmacist</p>
    </div>
  );
};

export default PharmMenu;
