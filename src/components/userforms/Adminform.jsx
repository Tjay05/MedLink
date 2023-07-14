const Adminform = ({ hospitalId, setHospitalId, adminId, setAdminId, adminPassword, setAdminPassword, data }) => {
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
                <p className="err-mssg" >{data[0]}</p>
                <label htmlFor="adminPassword">Enter Admin Password</label>
                <br />
                <input 
                    type="password"
                    id="adminPassword"
                    placeholder="Password"
                    name="adminPassword" 
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                />
            </form>
        </div>
     );
}
 
export default Adminform;