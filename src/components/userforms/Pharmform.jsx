import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const PharmForm = ({ pharmId, setPharmId, pharmPword, setPharmPword }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

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
                    value={pharmId}
                    onChange={(e) => setPharmId(e.target.value)}
                />
                <br />
                <label htmlFor="pharmPword">Enter your Password</label>
                <br />
                <div className="passVisibility">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="pharmPword"
                        placeholder="Password"
                        name="pharmPword"
                        value={pharmPword}
                        onChange={(e) => setPharmPword(e.target.value)}
                    />
                    <div className='showPword'                     onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default PharmForm;