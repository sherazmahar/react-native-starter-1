module.exports = {
  env: {
    test: {
      plugins: [["@babel/plugin-proposal-class-properties"]]
    }
  },
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "^\\/(.+)": "./src/\\1"
        }
      }
    ]
  ],
  presets: ["module:metro-react-native-babel-preset", "module:react-native-dotenv"]
}
