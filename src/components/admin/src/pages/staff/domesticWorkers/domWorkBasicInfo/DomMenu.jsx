import dots from "../../../../assets/Dots.svg";
const DomMenu = () => {
  return (
    <header>
      <div className="docMenu">
        <p>Domestic Worker</p>

        <p>
          <img src={dots} id="dot" />
        </p>

        <p className="p">Add a Domestic Worker</p>
      </div>
    </header>
  );
};

export default DomMenu;
