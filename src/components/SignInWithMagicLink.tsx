import { useSendSignInLinkToEmail } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/app'

const SignInWithMagicLink: React.FC = () => {
  const [sendSignInLinkToEmail, sending, fbError] =
    useSendSignInLinkToEmail(auth)
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const setAuthModalState = useSetAtom(authModalState)

  const actionCodeSettings = {
    url: process.env.NEXT_PUBLIC_FIREBASE_MAGIC_LINK_CONTINUE_URL as string,
    handleCodeInApp: true,
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await sendSignInLinkToEmail(email, actionCodeSettings)

    // Temporarily store user's email in localStorage for match-check on sign-in page
    window.localStorage.setItem('emailForSignIn', email)

    setIsSuccess(true)
  }

  return (
    <Flex>
      <Text>Sign In With Magic Link</Text>
      
      {isSuccess ? (
        <Text>Check your email 💌</Text>
      ) : (
        <>
          <Text>
            Enter your email and we will send you a link to sign in.
          </Text>
          <form onSubmit={handleSubmit}>
            <Input
              required
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {fbError && <Text>{fbError.message}</Text>}

            <Button type="submit" isLoading={sending}>
              Send Link To Sign-In
            </Button>
          </form>
        </>
      )}
    </Flex>
  )
}

export default SignInWithMagicLink
