import React from "react";

function Login(props) {
    return (
        <div className="general-content-container">
            <h2>Click the button to log in.</h2>
            <button onClick={props.handleLogin}>{props.authState ? "Logout" : "Login"}</button>
            <p>You need to be logged in to see the post overview.</p>
        </div>
    );
}

export default Login;