import dots from "../../../../../../assets/icons/Dots.svg";
const DomMenu = () => {
  return (
    <div className="docMenu">
      <p>Domestic Worker</p>
      <p>
        <img src={dots} id="dot" />
      </p>
      <p className="p">Add a New Domestic Worker</p>
    </div>
  );
};

export default DomMenu;
