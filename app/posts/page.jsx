import PostCard from '@/components/PostCard';
import React from 'react'

const loadPosts = async () => {
  const rest = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = rest.json();

  await new Promise(resolve => setTimeout(resolve, 3000));

  return data;
}

async function PostPage() {

  const posts = await loadPosts();

  console.log(posts)

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostPage