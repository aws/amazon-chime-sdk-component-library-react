module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.test\\.tsx$',
    setupFilesAfterEnv: ['./tst/setupTests.js'],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node",],
    collectCoverage: true,
    collectCoverageFrom: ["src/components/*.tsx"],
    coverageReporters: ["text-summary"],  
};