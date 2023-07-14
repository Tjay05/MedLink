const Labform = ({ labId, setLabId, labPassword, setLabPassword, data }) => {
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
                <p className="err-mssg" >{data[0]}</p>
                <label htmlFor="labPassword">Enter Your Password</label>    
                <br />
                <input 
                    type="password"
                    id="labPword"
                    placeholder="Password"
                    name="labPassword" 
                    value={labPassword}
                    onChange={(e) => setLabPassword(e.target.value)}
                />
            </form>
        </div>
     );
}
 
export default Labform;