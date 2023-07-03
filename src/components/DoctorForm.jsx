const DoctorForm = () => {
    return ( 
        <div className="form-field">
            <form action="">
                <label htmlFor="text">Enter your Doctor ID</label><br />
                <input id="text" type="text" placeholder="Doctor ID" /><br />
                <label htmlFor="email">Enter your Email</label><br />
                <input id="email" type="email" placeholder="Email" /><br />
                <label htmlFor="pword">Enter your Password</label><br />
                <input id="pword" type="password" placeholder="Password" />
            </form>
        </div>
     );
}
 
export default DoctorForm;