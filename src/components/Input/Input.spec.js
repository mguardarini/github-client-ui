import { render } from '@testing-library/react-native'
import React from 'react'
import Input from './Input'

describe('Input - Render', () => {
  let inputComponent
  beforeEach(() => {
    inputComponent = render(<Input label="Float Label"/>)
  })
  test('Should be render with float label.', () => {
    let boxInput = inputComponent.getAllByText('Float Label')
    expect(boxInput).toBeTruthy()
  })
})
