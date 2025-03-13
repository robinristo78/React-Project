process.env.NODE_ENV = 'test';

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": ["babel-jest", { 
      presets: [
        ["@babel/preset-env", { targets: "defaults" }],
        ["@babel/preset-react", { runtime: "automatic" }]
      ] 
    }]
  },
  moduleNameMapper: {
    "^@testing-library/react$": "<rootDir>/../expenses/node_modules/@testing-library/react",
    "^@testing-library/user-event$": "<rootDir>/../expenses/node_modules/@testing-library/user-event",
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    "^@components/(.*)$": "<rootDir>/src/components/$1"
  },
  moduleDirectories: ["node_modules", "<rootDir>/../expenses/node_modules"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  roots: ["<rootDir>/../automaattestimine"]
};
