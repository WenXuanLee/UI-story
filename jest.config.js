export default {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Simulates a browser environment for testing React components
  setupFilesAfterEnv: ["<rootDir>/setup-test.ts"], // Ensures Jest DOM matchers are loaded
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Support for absolute imports
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
     "!src/**/*.stories.tsx",   // Ignore Storybook files
    "!src/**/*.styles.ts",
  ],     // Ignore styles files],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transpiles TypeScript files for Jest
  },
};
