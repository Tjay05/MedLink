import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="unavailable">
            <h2>Page not Found!!!</h2>
            <p>You have appeared to visit a page that doesn't exist in this domain. To return back to the homepage <Link to="/">click here</Link>.</p>
        </div>
     );
}
 
export default NotFound;x