import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }
    //email...................................
    // const createUser = () => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password)
    //         .finally(() => { setLoading(false) });
    // }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
        signInUsingGoogle,
        // createUser,
        logOut
    }
}

export default useFirebase;