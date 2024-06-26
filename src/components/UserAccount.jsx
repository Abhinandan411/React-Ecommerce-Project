import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function UserAccount() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center'>
        {auth.currentUser ? (
          <div>
            <AccountCircleIcon style={{ fontSize: 60 }} className='text-gray-700 mb-4' />
            <p className='text-xl font-bold mb-2'><strong>Username: </strong> {auth.currentUser.displayName}</p>
            <p className='text-xl font-bold mb-4'><strong>Email: </strong> {auth.currentUser.email}</p>
            <button 
              className='bg-cyan-600 hover:bg-cyan-800 text-white py-2 px-4 rounded-md' 
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <p className='mb-5 text-lg'>Register yourself</p>
            <Link 
              to='/login' 
              className='bg-cyan-950 hover:bg-cyan-800 text-white py-2 px-4 rounded-md'
            >
              Go to Log in page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAccount;
