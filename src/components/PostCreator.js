import React, { useState } from "react";

const PostCreator = ({ users, createPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");

  const handleSubmit = () => {
    if (selectedUserId && title && body) {
      createPost(selectedUserId, title, body);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="mb-4">
      <select
        className="p-2 border"
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Title"
        className="border p-2 mb-2 block w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        className="border p-2 mb-2 block w-full"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleSubmit}
      >
        Create Post
      </button>
    </div>
  );
};

export default PostCreator;
