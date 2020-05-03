import axios from 'axios'
const githubUrl = 'https://api.github.com'

const GithubLoginAPI = (token) =>
{
   console.log(token)
   return( axios.get(
      `${githubUrl}/user`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      },
    )
  )
}

export { GithubLoginAPI }