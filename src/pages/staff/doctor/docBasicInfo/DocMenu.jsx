import dots from "../../../../assets/Dots.svg";
const DocMenu = () => {
  return (
    <header>
      <div className="docMenu">
        <p>Doctor</p>

        <p>
          <img src={dots} id="dot" />
        </p>

        <p className="p">Add a new Doctor</p>
      </div>
    </header>
  );
};

export default DocMenu;
