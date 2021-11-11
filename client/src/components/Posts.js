import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api/posts";

const Posts = ({ posts, setPosts }) => {
 
  useEffect(() => {
    (async () => {
      const newPosts = await getPosts();
      setPosts(newPosts);
    })();
  }, []);

  return (
  <div>
    {posts.map((post)=>{
      return (
        <div key={post.id}>
          <h3>{post.author.username}</h3>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          {post.tags.map((tag)=>{return <Link className="tag" >{tag.name}</Link>})}
        </div>
      )
    })}
  </div>);
};

export default Posts;
