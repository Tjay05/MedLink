import dots from "../../../../../../assets/icons/Dots.svg";
const LabMenu = () => {
  return (
    <div className="docMenu">
      <p>Lab Scientists</p>
      <p>
        <img src={dots} id="dot" />
      </p>
      <p className="p">Add a New Lab Scientist</p>
    </div>
  );
};

export default LabMenu;
