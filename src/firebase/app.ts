import { getApp, getApps, initializeApp } from 'firebase/app' // Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjcP_W-_WV6s_IOwQK_Nj5aJrUlsTgLa0",
    authDomain: "guia-firebase-2.firebaseapp.com",
    projectId: "guia-firebase-2",
    storageBucket: "guia-firebase-2.appspot.com",
    messagingSenderId: "242978930227",
    appId: "1:242978930227:web:2d82cc785d2275d0352d46"
  };

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
const firestore = getFirestore(app)
const auth = getAuth(app)


onst [error, setError] = useState('')
const [createUserWithEmailAndPassword, user, loading, fbError] =
    useCreateUserWithEmailAndPassword(auth)

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  // Reset the error before trying to submit the form
  if (error) setError('')

  // Check passwords match
  if (signUpForm.password !== signUpForm.confirmPassword) {
    setError('Passwords do not match')
    return
  }

  // Check password format
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,256}$/gm

  if (!passwordRegex.test(signUpForm.password)) {
    setError(
      'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
    )
    return
  }

  createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
}

// Expose the instances we'll need
export { app, firestore, auth }