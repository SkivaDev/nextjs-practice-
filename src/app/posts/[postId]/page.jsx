import React from "react";
import Posts from "../page";
import { Suspense } from "react";

const loadPost = async (postId) => {
  const rest = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = rest.json();
  return data;
};

async function page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div>
      <h1>Post Page: {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />

      <h3>Otras publicaciones</h3>

      <Suspense fallback={<div>Cargando...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default page;
