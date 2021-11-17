import React from "react";
import { Redirect, Route } from "react-router";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="text-center spinier-style">
                <Spinner animation="grow" variant="success" />
            </div>
        );
    }
    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        ></Redirect>
                    )
                }
            ></Route>
        </>
    );
};

export default PrivateRoute;
