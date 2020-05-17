import PropTypes from 'prop-types';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {colorsStyle, backgroundColor} from './Input.styles';

const Input = ({label, value, onChangeText, secureTextEntry, testID}) => {
  return (
    <TextInput
      label={label}
      value={value}
      secureTextEntry={secureTextEntry}
      style={{
        backgroundColor,
      }}
      testID={testID}
      onChangeText={onChangeText}
      theme={{colors: colorsStyle}}
    />
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
