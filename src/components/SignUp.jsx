import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });
      console.log("Account Created with Username: ", username);
      navigate('/login');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else {
        setError('Failed to create an account. Please try again.');
      }
      console.log(err);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor="username">Username:</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor="password">Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
        >
          Sign Up
        </button>
        <p className='text-center mt-4'>
          Already registered? <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
