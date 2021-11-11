
export async function userLogin (username, password) {
  try{
    const response = await fetch('/api/login',{
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