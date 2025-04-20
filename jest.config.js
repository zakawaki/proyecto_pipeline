

  module.exports = {
    testMatch: [
      '**/tests/**/*.test.js',
      '**/__tests__/**/*.test.js'
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      '/src/' 
    ]
  };
  module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/__tests__'],
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src'],
    collectCoverageFrom: ['src/**/*.js']
  };
  module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    verbose: true
  };
  module.exports = {
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src'],
  };