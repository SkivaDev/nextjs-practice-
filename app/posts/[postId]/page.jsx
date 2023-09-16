import React from 'react'

const loadPost = async (postId) => {
  const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = rest.json();
  return data;
}


async function page({params}) {

  const post = await loadPost(params.postId);

  return (
    <div>
      <h1>Post Page: {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default page