module.exports = {
    //jsdom is to simulate the browser, in order to run correctly the tests
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    //to check if we are covering all tests - functions, variables, etc...
    collectCoverage: true,
    //types of files to cover
    collectCoverageFrom: ["src/**/*.ts(x)"],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}