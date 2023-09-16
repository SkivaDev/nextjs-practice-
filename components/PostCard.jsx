'use client'

import React from "react";

function PostCard({ post }) {
  return (
    <div>
      <div>
        <h3>
          {post.id}. {post.title}
        </h3>
        <p>{post.body}</p>
        <button onClick={() => {
          return alert(post.title)
        }}>Click</button>
      </div>
    </div>
  );
}

export default PostCard;
