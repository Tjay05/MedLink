import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const DoctorForm = ({ docId, setDocId, docPword, setDocPword, data}) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="form-field">
            <form >
                <label htmlFor="docId">Enter your Doctor Id</label>
                <br />
                <input
                    id="docId"
                    type="text"
                    placeholder="Doctor Id"
                    name="docId"
                    value={docId}
                    onChange={(e) => setDocId(e.target.value)}
                />
                <br />
                <label htmlFor="docPword">Enter your Password</label>
                <br />
                <div className="passVisibility">
                    <input
                        id="docPword"
                        name="docPword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={docPword}
                        onChange={(e) => setDocPword(e.target.value)}
                    />
                    <div className='showPword'                     onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>
                <p className="err-mssg" >{data}</p>
            </form>
        </div>
    );
}

export default DoctorForm;
