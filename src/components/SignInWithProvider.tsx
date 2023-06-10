import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/app';
import React from 'react';

const SignInWithProvider: React.FC = () => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth)
  
  return (
    <div>
      <button disabled={loading} onClick={() => signInWithGoogle()}>
        Continue with Google
      </button>

      {fbError && <text>{fbError.message}</text>}
    </div>
  )
}

export default SignInWithProvider