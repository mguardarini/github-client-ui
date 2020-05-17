import React from 'react';
import Image from './Image';
import {render} from '@testing-library/react-native';

describe('Image render and styles', () => {
  test('should be render image with custom path', () => {
    const urlfake = 'https://foo.com';
    const component = render(<Image testID="test" source={urlfake} />);
    const image = component.getByTestId('image test');
    expect(image.props.source.uri).toBe(urlfake);
  });
});
