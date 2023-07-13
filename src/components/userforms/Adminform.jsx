import { useEffect, useState } from "react";
import useFetch from "../../Api/useFetch";

const Adminform = () => {
    return ( 
        <div className="form-field">
            <form>
                <label htmlFor="hospitalId">Enter Hospital Id</label>
                <br />
                <input 
                    type="text"
                    id="hospitalId"
                    placeholder="Hospital Id" 
                    name="hospitalID"
                />
                <br />

                <label htmlFor="adminId">Enter your Admin Id</label>
                <br />
                <input 
                    type="text" 
                    id="adminId" 
                    placeholder="Admin Id" 
                    name="adminId" 
                    // value={adminId} 
                />
                <br />

                <label htmlFor="adminPassword">Enter Admin Password</label>
                <br />
                <input 
                    type="password"
                    id="adminPassword"
                    placeholder="Password"
                    name="adminPassword" 
                />
            </form>
        </div>
     );
}
 
export default Adminform;