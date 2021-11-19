import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import Button from '@restart/ui/esm/Button';


const Login = () => {
    const { error, setIsLoading, setUser, setError, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const handleGoogleLogin = () => {
        setIsLoading(true);

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className='d-flex justify-content-center google-login'>
            <div className=''>
                <Button className='google-btn px-5 py-2 fs-4' onClick={handleGoogleLogin} to='#'><FcGoogle style={{ fontSize: '55px' }} /> Login with Google</Button>
            </div>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Login;