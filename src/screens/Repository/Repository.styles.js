import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainContainer: {
    backgroundColor:'white'
  },
  botaoVoltar: {
    marginLeft: Platform.select({ ios: 16, default: 0 }),
  },
})
