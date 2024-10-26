import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot } from "firebase/firestore";
import {auth, db } from "@/lib/firebase";

export function UseUserData() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);
    
    useEffect(() => {
      // turn off real-time subscription
      let unsubscribe;
    
      if (user && user.id) {
        unsubscribe = onSnapshot(doc(db, "users", user.id), (doc) => {
          if (doc.exists()) {
            setUsername(doc.data()?.username);
            const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
            console.log(source, " data: ", doc.data());
          } else {
            console.log("No such document!");
          }
        });
        
      } else {
        setUsername(null);
        console.log("user does not exist")
      }
    
      return unsubscribe;
    
    }, [user])

    return { user, username };
}

