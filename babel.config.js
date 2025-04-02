module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'nativewind/babel'],
    plugins: [
      // Opcional: si usas Reanimated
      'react-native-reanimated/plugin',
    ],
  };
};
