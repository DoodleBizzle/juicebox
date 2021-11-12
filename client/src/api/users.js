

export async function registerUser (username, password, name, location){
  try{
    const response = await fetch('/api/users/register',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password,
          name,
          location
        }
      })
    })
    const result = await response.json();
    return result
  }catch(error){
    console.error(error);
  }
}


export async function userLogin (username, password) {
  try{
    const response = await fetch('/api/users/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    const result = await response.json()
    return result
  }catch(error){
    console.error(error)
  }
}