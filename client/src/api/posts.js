

export async function getPosts(){
  try{
    const response = await fetch('/api/posts');
    const result = await response.json();
    console.log("Results here  ",result.posts);
    return result.posts;
  }catch(error){
    console.error(error);
  }
}

export async function getSinglePost(postId){
  try{
    const response = await fetch(`/api/posts/${postId}`)
    const result = await response.json();
    return result
  } catch(error){
    console.error(error);
  }
}

export async function makePost(token, title, content, tags){
  try{
    const response = await fetch(`/api/posts/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title,
        content,
        tags
      })
    })
  }catch(error){
    console.error(error)
  }
}