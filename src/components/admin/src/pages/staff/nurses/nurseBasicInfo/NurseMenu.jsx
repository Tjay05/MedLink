import dots from "../../../../assets/Dots.svg";
const NurseMenu = () => {
  return (
    <header>
      <div className="docMenu">
        <p>Nurse</p>

        <p>
          <img src={dots} id="dot" />
        </p>

        <p className="p">Add a new Nurse</p>
      </div>
    </header>
  );
};

export default NurseMenu;
