const Adminform = () => {
    return ( 
        <div className="form-field">
            <form>
                <label htmlFor="adminId">Enter your Admin ID</label>
                <br />
                <input 
                    type="text" 
                    id="adminId" 
                    placeholder="Admin Id" 
                    name="adminId" 
                    // value={adminId} 
                />
                <br />

                <label htmlFor="hospitalEmail">Enter Hospital Email</label>
                <br />
                <input 
                    type="email"
                    id="hospitalEmail"
                    placeholder="Hospital Email"
                    name="hospitalEmail" 
                />
                <br />

                <label htmlFor="hospitalId">Enter Hospital ID</label>
                <br />
                <input 
                    type="text"
                    id="hospitalId"
                    placeholder="Hospital ID" 
                    name="hospitalID"
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