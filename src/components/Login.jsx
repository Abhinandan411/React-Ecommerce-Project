import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import UserProfile from './UserProfile'; // Import the UserProfile component

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Fixed typo here
  const [error, setError] = useState(''); // State for error messages
  const [success, setSuccess] = useState(''); // State for success messages
  const [user, setUser] = useState(null); // State to store user information

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
      setSuccess('Login Successful');
      setError(''); // Clear error message if login is successful
      setUser(userCredential.user); // Store user information
    } catch (err) {
      setError('Incorrect email or password'); // Set error message
      setSuccess(''); // Clear success message if there's an error
      console.log(err);
    }
  };

//   if (user) {
//     return <UserProfile user={user} />; // Render UserProfile if user is logged in
//   }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message */}
        {success && (
          <div className="flex items-center justify-center mb-4">
            <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-2" />
            <p className="text-blue-500">{success}</p>
          </div>
        )} {/* Display success message with blue tick */}
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
          Login
        </button>
        <p className='text-center mt-4'>
          Don't have an account? <Link to="/signup" className='text-blue-500 hover:text-blue-700'>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
