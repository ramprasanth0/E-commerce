

export const SignUp = () => {
    return (
        <div className="signup-container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5 col-3">
                <h2 className="text-center mb-5">SignUp</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" id="fname" className="form-control" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" id="lname" className="form-control" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input type="tell" id="mobile" className="form-control" placeholder="+91 - Enter your mobile number" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">EMail</label>
                        <input type="text" id="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">New password</label>
                        <input type="text" id="password" className="form-control" required></input>
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    )
}