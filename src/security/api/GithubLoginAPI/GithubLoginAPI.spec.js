import { GithubLoginAPI } from './GithubLoginAPI'
import axios from 'axios'

const token = "hello i'm token";

describe('Github Login API', () => {
  test('Should be call Github login API.', async () => {

    const mockGithubLoginApi = {
        login: "githubUser"
    }

    axios.get.mockReturnValue({ data: mockGithubLoginApi })
    const expectResult = await GithubLoginAPI(token)
    expect(expectResult.data).toEqual(mockGithubLoginApi)
    
  })
})
