import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext =createContext();


const UserContext = ({children}) => {
    const [user,setUser]= useState({display:'zamil'});
    const googleProvider = new GoogleAuthProvider();

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const signInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const authInfo ={
        user,
        createUser,googleSignIn,setUser,signInWithEmail
    }
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;