module.exports = {
  preset: 'jest-playwright-preset',
  testRegex: './*\\.test\\.tsx$',
  setupFilesAfterEnv: ['./tst/setupTests.js'],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node",],
  testEnvironment: 'jsdom',
};