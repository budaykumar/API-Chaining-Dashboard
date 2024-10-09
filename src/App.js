import React, { useState } from "react";
import APIFetcher from "./components/APIFetcher";
import PostCreator from "./components/PostCreator";
import CommentsDisplay from "./components/CommentsDisplay";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Users and Comments Chaining
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  // Create Post and Chain to Fetch Comments
  const createPost = async (userId, title, body) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, title, body }),
      });
      const postData = await res.json();
      setPost(postData);
      fetchComments(postData.id);
    } catch (err) {
      setError("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async (postId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const commentsData = await res.json();
      setComments(commentsData);
    } catch (err) {
      setError("Error fetching comments");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Chaining Dashboard</h1>

      {/* Error Message */}
      {error && <ErrorMessage message={error} />}

      {/* Loading Spinner */}
      {loading && <Loader />}

      {/* Fetch Users */}
      <APIFetcher users={users} fetchUsers={fetchUsers} />

      {/* Create Post */}
      {users.length > 0 && (
        <PostCreator users={users} createPost={createPost} />
      )}

      {/* Display Created Post */}
      {post && <CommentsDisplay post={post} comments={comments} />}
    </div>
  );
}

export default App;
