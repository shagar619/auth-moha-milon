import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
      const unSubscribe= onAuthStateChanged(auth, currentUser => {
        console.log('current user', currentUser);
        setUser(currentUser);
        setLoading(false);

        })

        return () => {
            unSubscribe();
        }
    } , [])



    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log('currently logged in', currentUser);
    //         setUser(currentUser);
    //     }else{
    //         console.log('No user logged in');
    //         setUser(null);
    //     }
    // })





    const authInfo = {
        createUser,
        loginUser,
        user,
        signOutUser,
        loading,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




// 1. create context with null as default
// 2. create provider
// 3. set a value with something (authInfo)
// 4. use the authProvider in the main.jsx
// 5. access the children inside the authProvider in the main.jsx
// 6. export AuthContext