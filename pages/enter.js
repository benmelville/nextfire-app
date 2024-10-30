import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';
import { useContext, useState } from 'react';
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
  // form value is the value the user types into form input
  const [formValue, setFormValue] = useState('');
  // isValid tells us whether or not the username is a valid selection
  const [isValid, setIsValid] = useState(false);
  // loading is true when we are asynchronously checking if username exits
  const [loading, setLoading] = useState(false);

  // grab user and username from global context
  const [user, username] = useContext(UserContext);

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);


  const onChange = (e) => {
    // force form value to be all lowercase
    const val = e.target.value.toLowerCase();
    //TODO: figure out what this is doing
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }
    //TODO: i guess test here checks to see if regex is valid??? kinda cool
    if (re.test(val)) {
      setFormValue(true);
      setLoading(true);
      setIsValid(false);
    }
  }


  // add lodash.debounce to prevent the execution of this event until last event has stopped firing
  // or last form value has changed after delay of 500ms
  const checkUsername = useCallback(
      debounce(async (username) => {
      if (username.length >= 3) {
        const docRef = doc(db, "usernames", username);
        const docSnap = await getDoc(docRef);
        console.log('firestore read executed!')
        setIsValid(!docSnap.exists());
        setLoading(false); 
      }
    }, 500),
    []
  );





  return (
    !username && (
      <section>
        <h3>
          <form onSubmit={onSubmit}>
            {/* we want to bind this input to form value state in the component so we can monitor value.
                This is a technique known as controlled input. We do that by setting the value to the form
                value state on the component and then have a handler for when that value changed called onChange */}
            <input name="username" placeholder="username" value={formValue} onChange={onChange} />
            <button type="submit" className='btn-green' disabled={!isValid}>
              choose
            </button>
            
            <h3>debug mode!</h3>
            <div>
              username: {formValue}
              <br />
              loading: {loading.toString()}
              <br />
              username valid: {isValid.toString()}
            </div>
          </form>
        </h3>
      </section>
    )
  )
}