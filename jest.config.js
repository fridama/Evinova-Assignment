/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/__tests__/**/*.test.ts"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "dist/", "node_modules/"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
