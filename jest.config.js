const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = Object.assign(jestPreset, {
  setupFiles: [...jestPreset.setupFiles, './setup.jest.js'],
});