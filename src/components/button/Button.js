import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

const Button = ({text, onPress, width, disabled, testID, opacity}) => {
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
        opacity ? styles.opacity : {},
      ]}>
      <Text testID="label" style={opacity ? styles.textOpacity : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
