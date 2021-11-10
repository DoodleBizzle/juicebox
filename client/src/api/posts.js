

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