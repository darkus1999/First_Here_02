module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@resources": "./resources",
          "@routes": "./routes",
          "@services": "./services",
          "@components": "./resources/components"
        }
      }]
  ],
};
