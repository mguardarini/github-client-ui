import React from 'react'
import { Image as RNImage, View } from 'react-native'

const Image = ({source, style, testID}) => {
    return (
     <View>
        <RNImage
        testID={`image ${testID}`}
        source={{
            uri: source,
        }}
        style={style}
        />
     </View>
    )
}
export default Image
