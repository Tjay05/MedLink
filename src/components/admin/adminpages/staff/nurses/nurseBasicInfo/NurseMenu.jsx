import dots from "../../../../../../assets/icons/Dots.svg";
const NurseMenu = () => {
  return (
    <div className="docMenu">
      <p>Nurse</p>
      <p>
        <img src={dots} id="dot" />
      </p>
      <p className="p">Add a New Nurse</p>
    </div>
  );
};

export default NurseMenu;
