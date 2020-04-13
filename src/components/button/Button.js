import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Button.styles'

const Button = ({
  text,
  onPress,
  width,
  disabled,
  testID,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      testID={`button ${testID}`}
      style={[
        styles.button,
        {
          width: width,
        },
      ]}
    >
      <Text
        testID="label"
        style={[
          styles.text
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
