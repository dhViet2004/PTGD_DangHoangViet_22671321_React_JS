import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserInfo } from '../store';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, email }));
  };

  const handleLogout = () => {
    dispatch(logout());
    setUsername('');
    setEmail('');
  };

  const handleUpdateInfo = () => {
    dispatch(setUserInfo({ username, email }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Authentication</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold">Welcome, {user.username}!</h3>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
          
          <div className="space-y-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="New username"
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="New email"
              className="w-full px-3 py-2 border rounded-md"
            />
            <button
              onClick={handleUpdateInfo}
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Update Info
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth; 