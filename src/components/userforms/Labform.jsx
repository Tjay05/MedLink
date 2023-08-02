import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const Labform = ({ labId, setLabId, labPassword, setLabPassword }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

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
                    value={labId}
                    onChange={(e) => setLabId(e.target.value)}
                />
                <br /> 
                <label htmlFor="labPassword">Enter Your Password</label>    
                <br />
                <div className="passVisibility">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="labPword"
                        placeholder="Password"
                        name="labPassword"
                        value={labPassword}
                        onChange={(e) => setLabPassword(e.target.value)}
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
 
export default Labform;