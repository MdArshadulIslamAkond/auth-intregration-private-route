import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase-config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLodings] = useState(true);
    const createUser = (email, password)=>{
        setLodings(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password)=>{
        setLodings(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = ()=>{
        setLodings(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        setLodings(true);
        return signOut(auth)
    }

    // observe auth state changes
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observing current user inside useEffect of AuthProvider', currentUser);
            setLodings(false);
        })
        return ()=>{
            unSubscribe();
        }
    }, [])
    const authInfo = {user, createUser, signInUser, logOut, loading, signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;