import React from "react";
import { Link } from "react-router-dom";

function User() {
    return (
        <div className="d-flex justify-content-center  align-items-center  vh-100">
            <div className="card p-5 col-3">
                <a class="btn btn-lg btn-primary mb-3" aria-current="page" href="/" role="button">Home</a>
                <a class="btn btn-lg btn-warning mb-3" aria-current="page" href="/login">Login</a>
                <a class="btn btn-lg btn-warning mb-3" aria-current="page" href="/signup" role="button">SignUp</a>
            </div>
        </div>
    );
}

export default User;