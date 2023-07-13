import { useEffect, useState } from "react";
import useFetch from "../../Api/useFetch";

const Labform = () => {
    return ( 
        <div className="form-field">
            <form>
                <label htmlFor="labId">Enter your Lab Id</label>
                <br />
                <input 
                    type="text" 
                    id="labId"
                    placeholder="Lab Id"
                    name="labId"
                />
                <br />

                <label htmlFor="labPword">Enter Your Password</label>    
                <br />
                <input 
                    type="password"
                    id="labPword"
                    placeholder="Password"
                    name="labPword" 
                />
            </form>
        </div>
     );
}
 
export default Labform;