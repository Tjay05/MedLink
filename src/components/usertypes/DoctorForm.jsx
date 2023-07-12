import { useEffect, useState } from "react";
import useFetch from "../../Api/useFetch";

const DoctorForm = ({onLogin}) => {
    const [docId, setDocId] = useState("");
    const [password, setPassword] = useState("");
    const { data, isPending, error } = useFetch(
        "https://hospital-management-backend.onrender.com/doctor/login",
        "POST",
        {
        "Content-type": "application/json",
        },
        {
        id: docId,
        password: password,
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        onLogin()
    };

    return (
        <div className="form-field">
            <form onSubmit={handleSubmit}>
                <label htmlFor="doctorId">Enter your Doctor ID</label>
                <br />
                <input
                    id="doctorId"
                    type="text"
                    placeholder="Doctor ID"
                    name="docId"
                    value={docId}
                    onChange={(e) => setDocId(e.target.value)}
                />
                <br />
                <label htmlFor="pword">Enter your Password</label>
                <br />
                <input
                    id="pword"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {error && <div id="errorMessage">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default DoctorForm;
