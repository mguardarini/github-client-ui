module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@components': './src/components',
          '@features': './src/features',
          '@images': './src/images',
          '@enviroments':'./src/infrastructure/enviroments',
          '@infrastructure':'./src/infrastructure'
        },
      },
    ],
  ],
}
