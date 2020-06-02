import { GithubLoginAPI } from './GithubRepositoryAPI'
import axios from 'axios'

const repository = "hello i'm token";

describe('Github Repository API', () => {
  test('Should be call Github repository API.', async () => {

    const mockGithubRepositoryAPI = {
        login: "githubUser"
    }

    axios.get.mockReturnValue({ data: mockGithubRepositoryAPI })
    const expectResult = await GithubLoginAPI(token)
    expect(expectResult.data).toEqual(mockGithubRepositoryAPI)
    
  })
})
