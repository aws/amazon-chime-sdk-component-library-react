module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.test\\.tsx$',
    setupFilesAfterEnv: ['./tst/setupTests.js'],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node",],
    transform: {
        "\\.tsx?$": "ts-jest",
        "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
    },
    globals: {
        "ts-jest": {
        "tsConfig": 'tsconfig.json'
        }
    },
    testPathIgnorePatterns: ['node_modules', '/tst/snapshots/'],
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.tsx", "!src/**/*.stories.tsx"],
    coverageReporters: ["text-summary", "lcov", "json", "clover"],
    coverageDirectory: 'coverage',
};