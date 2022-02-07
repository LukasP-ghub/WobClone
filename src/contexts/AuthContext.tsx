import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../services/firebase';

interface AuthContextProviderProps {

}

interface contextType {
  currentUser: any,
  signUp: (email: string, password: string) => Promise<any>,
  signIn: (email: string, password: string) => Promise<any>,
  signOut: () => Promise<any>,
}

const AuthContext = React.createContext<contextType>({
  currentUser: null,
  signUp: async () => { },
  signIn: async () => { },
  signOut: async () => { },
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const signIn = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const signOut = () => {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [])



  const contextValue: contextType = {
    currentUser,
    signUp,
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

