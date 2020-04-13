import PropTypes from 'prop-types'
import React from 'react'
import { TextInput } from 'react-native-paper'
import {
  colorsStyle,
  paddingHorizontal,
  backgroundColor
} from './Input.styles'

const Input = ({ label, value, onChangeText }) => {

  return (
    <TextInput
    label={label}
    value={value}
    style={{
      backgroundColor
    }}
    onChangeText={onChangeText}
    theme = {{ colors: colorsStyle }}

  />
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Input
