import { useEffect, useState } from "react";
import useFetch from "../../Api/useFetch";

const PharmForm = () => {
    const [pharmId, setpharmId] = useState("");
    const [password, setPassword] = useState("");
    const { data, isPending, error } = useFetch(
        "https://hospital-management-backend.onrender.com/pharmacist/login",
        "POST",
        {
        "Content-type": "application/json",
        },
        {   
        id: pharmId,
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
            <form>
                <label htmlFor="pharmId">Enter your Pharmacist Id</label>
                <br />
                <input 
                    type="text"
                    id="pharmId"
                    placeholder="Pharmacist Id" 
                    name="pharmId"
                />
                <br />

                <label htmlFor="pharmPword">Enter your Password</label>
                <br />
                <input 
                    type="password"
                    id="pharmPword"
                    placeholder="Password"
                    name="pharmPword" 
                />
            </form>
        </div>
     );
}
 
export default PharmForm;