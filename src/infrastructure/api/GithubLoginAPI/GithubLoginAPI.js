import axios from 'axios'
import config from '../../enviroments/config.json';

const githubUrl = config.githubUrl;

const GithubLoginAPI = (token) =>
{
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