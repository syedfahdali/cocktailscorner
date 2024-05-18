import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../pages/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      setCurrentUser(null);
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
