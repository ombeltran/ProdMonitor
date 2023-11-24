import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="Login">
            <form className="Login_form">
                <h2>Login</h2>

                <label>User </label>
                <input type="text" placeholder="Write your user" required></input>
    
                <label>Password </label>
                <input type="password" placeholder="Write your password" required></input>
                
                <button className="button">Login</button>
            </form>
        </div>
    );
}

export default Login;