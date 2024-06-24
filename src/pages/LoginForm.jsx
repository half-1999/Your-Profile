import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-md max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
