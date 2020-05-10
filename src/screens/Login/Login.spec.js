import React from 'react'
import { render, act, fireEvent } from 'react-native-testing-library'
import Login from './Login'

let navigation
let component

beforeEach(() => {
    navigation = {
      setOptions: obj => {
        Object.assign(navigation, obj)
      },
      navigate: jest.fn(),
    }
    component = render(<Login navigation={navigation} />)
})

describe('Navigation - Header', () => {
    test('Should be render the header', () => {
      expect(navigation).toHaveProperty('headerShown', true)
    })
    test('Should be render with the title "Welcome Github Client"', () => {
      expect(navigation).toHaveProperty('headerTitle', 'Welcome Github Client')
    })
})