import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

export const useAuth = () => {
  return useContext(AuthContext);
};

//AUth provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Loading, setLoading] = useState(false);

  //register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  //login a user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const googleSignIn = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  //logout a user
  const logOutUser = () => {
    return signOut(auth);
  };

  //manage userstate
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        const { email, displayname, photoURL } = user;
        const userData = {
          email,
          username: displayname,
          photo: photoURL,
        };
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    registerUser,
    loginUser,
    googleSignIn,
    logOutUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
