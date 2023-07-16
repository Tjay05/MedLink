import dots from "../../../../../../assets/icons/Dots.svg";
const PharmMenu = () => {
  return (
    <header>
      <div className="docMenu">
        <p>Pharmacist</p>

        <p>
          <img src={dots} id="dot" />
        </p>

        <p className="p">Add a new Pharmacist</p>
      </div>
    </header>
  );
};

export default PharmMenu;
