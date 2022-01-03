import { useState, useEffect } from "react";
import initializeFirebase from "../pages/Home/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    //   create new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = { email, displayName: name };
        setUser(newUser);
        setAuthError("");
        //insert user data in DB
        saveUser(email, name, "POST");
        //update name on firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          });
        history.replace("/");
      })
      .catch((error) => {
        // console.log(error.code);
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
        setAuthError("");
      })
      .catch((error) => {
        // An error happened.
        setAuthError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };
  //login user
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        const user = userCredential.user;
        setUser(user);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //signIn with Google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   observe users behavior
  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
        setAuthError("");
        getIdToken(user).then((data) => setToken(data));
      } else {
        // User is signed out
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, []);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://frozen-mesa-36688.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  useEffect(() => {
    fetch(`https://frozen-mesa-36688.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    admin,
    token,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
    signInWithGoogle,
  };
};
export default useFirebase;
