import React from 'react';
import Button from './Button';
import {render, fireEvent} from '@testing-library/react-native';

describe('Button render and styles', () => {
  test('should be render button with text "test button"', () => {
    const component = render(<Button text="test button" />);
    const label = component.getByTestId('label');
    expect(label.props.children).toBe('test button');
  });
});

describe('Button behavior', () => {
  test('should be call function when click in the button.', () => {
    const onPressButtonMock = jest.fn();
    const component = render(
      <Button testID="test" onPress={onPressButtonMock} text="test" />,
    );
    fireEvent.press(component.getByTestId('button test'));
    expect(onPressButtonMock).toHaveBeenCalledTimes(1);
  });
});
