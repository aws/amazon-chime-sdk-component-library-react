module.exports = {
    preset: 'jest-puppeteer-docker',
    testRegex: './*\\.test\\.tsx$',
    setupFilesAfterEnv: ['./tst/setupTests.js'],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node",],
    collectCoverage: true,
    collectCoverageFrom: ["src/components/*.tsx"],
    coverageReporters: ["text-summary"],  
};