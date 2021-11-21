import React, {useEffect, useState} from "react";
import { useParams} from "react-router";
import { Link } from "react-router-dom";
import { getSinglePost } from "../api/posts";

const Post = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getSinglePost(postId);
      setPost(response);
      setIsLoading(false);
      console.log(response)
    })();
  },[])

  return(
    <>
    { isLoading ? null :
    <div key={post.id}>
      <h3>{post.author.username}</h3>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      {post.tags.map((tag)=>{return <Link className="tag" >{tag.name}</Link>})}
      
    </div>
    }
    </>
  )
}

export default Post;