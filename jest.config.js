module.exports = {
  testRegex: './*\\.test\\.tsx$',
  setupFilesAfterEnv: ['./tst/setupTests.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  transform: {
    '\\.tsx?$': 'ts-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  testPathIgnorePatterns: ['node_modules', '/tst/snapshots/',],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.stories.tsx'],
  coveragePathIgnorePatterns: [
    '/src/providers/*',
    '/src/components/sdk/*',
    '/src/hooks/sdk/*'
  ],
  coverageReporters: ['text-summary', 'lcov', 'json', 'clover'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 64,
      functions: 72,
      lines: 72,
      statements: 71
    }
  }
};
