const PharmForm = ({ pharmId, setPharmId, pharmPword, setPharmPword, data }) => {
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
                <p className="err-mssg" >{data[0]}</p>
                <label htmlFor="pharmPword">Enter your Password</label>
                <br />
                <input 
                    type="password"
                    id="pharmPword"
                    placeholder="Password"
                    name="pharmPword" 
                    value={pharmPword}
                    onChange={(e) => setPharmPword(e.target.value)}
                />
            </form>
        </div>
     );
}
 
export default PharmForm;