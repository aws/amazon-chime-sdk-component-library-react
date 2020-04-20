module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.test\\.tsx$',
    setupFilesAfterEnv: ['./setupTests.js'],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node",]
};