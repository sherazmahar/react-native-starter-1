module.exports = {
  presets: ["module:metro-react-native-babel-preset", "module:react-native-dotenv"],
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
  env: {
    test: {
      plugins: [["@babel/plugin-proposal-class-properties"]]
    }
  }
}
