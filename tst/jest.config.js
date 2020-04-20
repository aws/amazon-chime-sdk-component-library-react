module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.test\\.tsx$',
    setupFilesAfterEnv: ['./setupTests.js'],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node",],
    transform: {
        "\\.tsx?$": "ts-jest",
    },
    globals: {
        "ts-jest": {
        "tsConfig": 'tsconfig.json'
        }
    },
    testPathIgnorePatterns: ['node_modules', '/tst/snapshots/'],
    testEnvironment: 'jsdom',
};