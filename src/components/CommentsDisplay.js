import React from "react";

const CommentsDisplay = ({ post, comments }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="font-bold">Created Post</h3>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p>User ID: {post.userId}</p>

      {/* Display Comments */}
      {comments.length > 0 && (
        <div className="border p-4">
          <h3 className="font-bold">Comments</h3>
          {comments.map((comment) => (
            <div key={comment.id} className="mb-2">
              <p>
                <strong>{comment.name}:</strong> {comment.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsDisplay;
