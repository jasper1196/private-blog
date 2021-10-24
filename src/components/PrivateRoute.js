import React from "react";
import {Redirect, Route} from "react-router-dom";

function PrivateRoute({component: Component, authState, ...rest}) {
    return (
        <Route {...rest} render={props => (
            authState ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
}

export default PrivateRoute;