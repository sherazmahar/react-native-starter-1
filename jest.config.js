module.exports = {
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  modulePathIgnorePatterns: ["<rootDir>/builds"],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  }
}
