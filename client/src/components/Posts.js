import React, { useEffect } from "react";
import { getPosts } from "../api/posts";

const Posts = ({ posts, setPosts }) => {
 
  useEffect(() => {
    (async () => {
      const newPosts = getPosts();
      setPosts(newPosts);
    })();
  }, []);

  return <div></div>;
};
// hi comment
export default Posts;
