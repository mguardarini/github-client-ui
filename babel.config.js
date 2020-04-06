module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@images': './src/images',
        },
      },
    ],
  ],
}
