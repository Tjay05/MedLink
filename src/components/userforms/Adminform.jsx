import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const Adminform = ({ hospitalId, setHospitalId, adminId, setAdminId, adminPassword, setAdminPassword, adminData }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return ( 
        <div className="form-field">
            <form>
                <label htmlFor="hospitalId">Enter Hospital Id</label>
                <br />
                <input 
                    type="text"
                    id="hospitalId"
                    placeholder="Hospital Id" 
                    name="hospitalId"
                    value={hospitalId}
                    onChange={(e) => setHospitalId(e.target.value)}
                />
                <br />

                <label htmlFor="adminId">Enter your Admin Id</label>
                <br />
                <input 
                    type="text" 
                    id="adminId" 
                    placeholder="Admin Id" 
                    name="adminId" 
                    value={adminId} 
                    onChange={(e) => setAdminId(e.target.value)}
                />
                <br />
                <label htmlFor="adminPassword">Enter Admin Password</label>
                <br />
                <div className='passVisibility'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="adminPassword"
                        placeholder="Password"
                        name="adminPassword"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                    />
                    <div className='showPword'                     onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>
                <p className="err-mssg">{adminData}</p>
            </form>
        </div>
     );
}
 
export default Adminform;