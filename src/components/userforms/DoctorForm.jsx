import { useEffect, useState } from "react";
import useFetch from "../../Api/useFetch";

const DoctorForm = ({onLogin}) => {
    return (
        <div className="form-field">
            <form >
                <label htmlFor="doctorId">Enter your Doctor Id</label>
                <br />
                <input
                    id="doctorId"
                    type="text"
                    placeholder="Doctor Id"
                    name="docId"
                    // value={docId}
                    // onChange={(e) => setDocId(e.target.value)}
                />
                <br />
                <label htmlFor="pword">Enter your Password</label>
                <br />
                <input
                    id="pword"
                    name="password"
                    type="password"
                    placeholder="Password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
                <br />
            </form>
        </div>
    );
}

export default DoctorForm;
