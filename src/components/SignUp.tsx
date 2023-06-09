'use client'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/app'
import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

return (
  <form onSubmit={handleSubmit}>
    <input
      required
      name="email"
      placeholder="email"
      type="email"
      onChange={handleChange}
    />
    <input
      required
      name="password"
      placeholder="password"
      type="password"
      onChange={handleChange}
    />
    <input
      required
      name="confirmPassword"
      placeholder="Confirm password"
      type="password"
      onChange={handleChange}
    />

    <button type="submit">
      Sign Up
    </button>
  </form>
);
}

export default SignUp