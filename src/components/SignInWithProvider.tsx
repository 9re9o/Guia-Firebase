import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/app'

const SignInWithProvider: React.FC = () => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth)
  
  return (
    <Flex>
      <Button isLoading={loading} onClick={() => signInWithGoogle()}>
        Continue with Google
      </Button>

      {fbError && <Text>{fbError.message}</Text>}
    </Flex>
  )
}

export default SignInWithProvider