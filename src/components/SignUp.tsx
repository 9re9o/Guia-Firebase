'use client'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/app'

const SignUp: React.FC = () => {
	const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

const handleSubmit = () => {}

return (
  <form onSubmit={handleSubmit}>
    <Input
      required
      name="email"
      placeholder="email"
      type="email"
      onChange={handleChange}
    />
    <Input
      required
      name="password"
      placeholder="password"
      type="password"
      onChange={handleChange}
    />
    <Input
      required
      name="confirmPassword"
      placeholder="Confirm password"
      type="password"
      onChange={handleChange}
    />

<Button type="submit" isLoading={loading}>
  Sign Up
</Button>
  </form>
);
}

export default SignUp