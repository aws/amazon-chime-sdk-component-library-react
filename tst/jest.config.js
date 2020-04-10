module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.test\\.tsx$',
    setupFilesAfterEnv: ['./setupTests.js']
};