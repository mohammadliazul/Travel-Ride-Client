import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut, } from 'firebase/auth';
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [name] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user && user.emailVerified) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, [auth]);


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch(error => {
                setError(error.code);
            })
    }




    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }






    return {
        user,
        error,
        isLoading,
        setIsLoading,
        setUser,
        setError,
        signInUsingGoogle,
        logOut,
        setUserName
    }
}

export default useFirebase;