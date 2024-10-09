import React from "react";

const APIFetcher = ({ users, fetchUsers }) => {
  return (
    <div className="mb-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={fetchUsers}
      >
        Fetch Users
      </button>

      {users.length > 0 && (
        <select className="mt-2 p-2 border">
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default APIFetcher;
