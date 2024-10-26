import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '@/lib/context';


export default function EnterPage({ }) {

  const { user, username } = useContext(UserContext);

  //1. user signed out <SignInButton />
  //2. user signed in, but missing username <UsernameForm />
  //3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ?
        username ? <SignOutButton /> : <UsernameForm />
        : 
        <SignInButton />
      }
    </main>
  )
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  }
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> sign in with google
    </button>
  )

}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>sign out</button>
}

function UsernameForm() {
  return (
    <h1>dang brother</h1>
  )
}