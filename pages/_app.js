import { UserContext } from "@/lib/context";
import Navbar from "/components/Navbar";
import "/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import { UseUserData } from "@/lib/hooks";

// Wrapper or layout that surrounds every other page
// Can use this to add ui components that are on every page such as a navbar or footer
// or use it to manage the authentication state on the frontend
export default function App({ Component, pageProps }) {

  const userData = UseUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />;
      <Toaster />
    </UserContext.Provider>
  )
}
