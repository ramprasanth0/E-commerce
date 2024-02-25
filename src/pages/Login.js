import React, { useState } from "react"
// import { Redirect } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    // const history = useHistory() // Get the history object from React Router
    // const [redirectToRoot, setRedirectToRoot] = useState(false);

    //dummy user
    const dummyUser = [{ email: "abc", password: "123" }, { email: "xyz", password: "456" }]

    const handleEmailchange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordchange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email', email)
        console.log('Password', password)
        const user = dummyUser.find(u => u.email === email && u.password === password)

        if (user) {
            console.log("Login Successful")
            setError('');
            //Redirect user to home page
            // history.push('/')
            // setRedirectToRoot(true);
        } else {
            // User not found or invalid credentials
            setError('Invalid email or password');
        }
        setEmail('')
        setPassword('')
    }

    return (
        <div className="login-container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5 col-3">
                <h2 className="text-center mb-5">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" id="email" className="form-control" value={email} onChange={handleEmailchange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" id="password" className="form-control" value={password} onChange={handlePasswordchange} required></input>
                    </div>
                    {error && <div className="text-danger mb-3">{error}</div>}
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    )
}
export default Login
