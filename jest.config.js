const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './src' });
const customConfig = {
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/node_modules',
    "<rootDir>/e2e/"
  ],
  testMatch: ["<rootDir>/**/*.spec.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "~/(.*)$": "<rootDir>/$1",
    "@/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    "<rootDir>/services/**/*.ts",
    "!<rootDir>/services/{api,openapi}/**/*.ts"
  ],
  clearMocks: true,
  restoreMocks: true,  
}

module.exports = createJestConfig(customConfig)