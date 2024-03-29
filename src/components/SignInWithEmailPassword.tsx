'use client'
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";

const SignInWithEmailPassword: React.FC = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, fbError] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(signInForm.email, signInForm.password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        name="email"
        placeholder="email"
        type="Your email..."
        onChange={handleChange}
      />
      <input
        required
        name="password"
        placeholder="password"
        type="Choose a strong password..."
        onChange={handleChange}
      />

      {fbError && <text>fbError.message</text>}

      <button type="submit" >
        Sign In
      </button>
    </form>
  );
};
