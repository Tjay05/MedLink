import dots from "../assets/icons/Dots.svg"

const Homelayout = () => {
    return ( 
        <div className="docMenu">
            <p>Home</p>
            <p>
            <img src={dots} id="dot" />
            </p>
        </div>
     );
}
 
export default Homelayout;