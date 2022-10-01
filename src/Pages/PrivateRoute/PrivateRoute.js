import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import './PrivateRoute.css';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <>
            <div className='d-flex justify-content-center align-items-center my-5 py-5'>
                <Spinner animation='border' variant='info' />
            </div>
        </>;
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;