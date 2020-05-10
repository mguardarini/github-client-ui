import axios from 'axios'
import config from '../../enviroments/config.json';

const githubUrl = config.githubUrl;

const GithubRepositoryAPI = (token) =>
{
    return( axios.get(
      `${githubUrl}/user/repos`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      },
    )
  )
}

export { 
    GithubRepositoryAPI
}