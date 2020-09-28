import React from "react";
// import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
    const user = useSelector((state) => state.user);

    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return user.validated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                );
            }}
        />
    );
};

export default ProtectedRoute;
