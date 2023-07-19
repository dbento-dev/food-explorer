module.exports = {
  // testEnvironment: 'jest-environment-jsdom',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  }
}
