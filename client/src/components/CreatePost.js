import React, {useEffect, useState} from "react";
import { makePost } from "../api/posts";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tags, setTags] = useState();


  return(
    <form>
      <input
      type="text"
      minLength="1"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
      placeholder="Title">
      </input>
      <input
      type="text"
      minLength="6"
      value={content}
      onChange={(event) => setContent(event.target.value)}
      placeholder="Content">
      </input>
      <input
      type="text"
      value={tags}
      onChange={(event) => setTags(event.target.value)}
      placeholder="#Tags">
      </input>
      <button type="submit">Create Post</button>
    </form>
  )
}

export default CreatePost;