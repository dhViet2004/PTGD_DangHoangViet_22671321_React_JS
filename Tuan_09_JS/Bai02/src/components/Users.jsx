import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store';

const Users = () => {
  const dispatch = useDispatch();
  const { items: users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') {
    return <div className="p-4">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded">
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users; 