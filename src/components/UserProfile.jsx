import React from 'react';

function UserProfile({ user }) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>User Profile</h2>
        <div className='mb-4'>
          <p className='text-gray-700'><strong>Name:</strong> {user.displayName || 'N/A'}</p>
        </div>
        <div className='mb-4'>
          <p className='text-gray-700'><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
