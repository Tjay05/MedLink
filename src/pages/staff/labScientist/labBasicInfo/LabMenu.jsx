import dots from "../../../../assets/Dots.svg";
const LabMenu = () => {
  return (
    <header>
      <div className="docMenu">
        <p>Lab Scientists</p>

        <p>
          <img src={dots} id="dot" />
        </p>

        <p className="p">Add a new Lab Scientist</p>
      </div>
    </header>
  );
};

export default LabMenu;
