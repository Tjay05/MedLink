import dots from "../../../../../../assets/icons/Dots.svg";
const DocMenu = () => {
  return (
      <div className="docMenu">
        <p>Doctor</p>
        <p>
          <img src={dots} id="dot" />
        </p>
        <p className="p">Add a New Doctor</p>
      </div>
  );
};

export default DocMenu;
