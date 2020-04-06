jest.mock('react-native-orientation')
jest.useFakeTimers()
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}))

