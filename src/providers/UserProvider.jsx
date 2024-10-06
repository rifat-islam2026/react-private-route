import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

/**  context steps-
 * 1. create context and export 
 * 2. set provider with value
 * 3. use userProvider in the main.jsx file
 * 4. access children in the UserProvider component as children and use it in the middle of the provider 
 * */
export const UserContext = createContext(null);

function UserProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  // auth user create 
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // sign in user create
  const sigInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

  // logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  
  // on state change 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('current value of the current user : ', currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  },[])
  
  const userInfo = {
    user,
    createUser,
    sigInUser,
    logOut,
    loading
  };

  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
