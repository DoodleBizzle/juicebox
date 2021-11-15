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
  <>
    {posts.map((post)=>{
      return (
        <div key={post.id}>
          <h3>{post.author.username}</h3>
          <Link className="title" to={`/posts/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
          <p>{post.content}</p>
          {post.tags.map((tag)=>{return <Link className="tag" >{tag.name}</Link>})}
        </div>
      )
    })}
  </>);
};

export default Posts;
