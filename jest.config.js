/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    clearMocks: true,
    collectCoverage: true,
    bail: true,
    collectCoverageFrom: ['src/**'],
    coverageDirectory: 'tests/coverage',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.(spect|test).js?(x)'],
}
