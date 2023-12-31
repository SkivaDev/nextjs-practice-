"use client";

import React from "react";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <h3>
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button
        onClick={() => {
          return alert(post.title);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default PostCard;
