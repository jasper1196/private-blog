import React, { useState } from 'react';
import './App.css';
import NavHeader from "./components/NavHeader";
import Home from "./components/Home";
import Blogpost from "./components/Blogpost";
import Overview from "./components/Overview";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    const history = useHistory();

     function handleLogin() {
         if (!isAuthenticated) {
             history.push("/blog-overview");
         }
        toggleIsAuthenticated(!isAuthenticated);
        console.log("The current auth state is: " + isAuthenticated);

    }

    return (
        <div>
            <NavHeader
                authState={isAuthenticated}
            />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login
                        handleLogin={handleLogin}
                        authState={isAuthenticated}
                    />
                </Route>
                <PrivateRoute component={Overview} path="/blog-overview" authState={isAuthenticated}/>
                <PrivateRoute component={Blogpost} path="/blogpost/:id" authState={isAuthenticated}/>
            </Switch>
        </div>
    );
}

export default App;
