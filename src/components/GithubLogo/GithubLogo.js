import React from 'react'
import { Image, View } from 'react-native'

const GithubLogo = ({source, style}) => {
    return (
     <View>
        <Image
        source={{
            uri: source,
        }}
        style={style}
        />
     </View>
    )
}
export default GithubLogo
