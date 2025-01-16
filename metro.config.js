const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Получаем базовую конфигурацию
const config = getDefaultConfig(__dirname);

// Настройка трансформера для обработки SVG
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// Настройка резолвера для работы с SVG
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],
};

// Интеграция с NativeWind
module.exports = withNativeWind(config, { input: "./global.css" });
