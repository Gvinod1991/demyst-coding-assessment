import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'], // or .spec.ts
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageDirectory: 'coverage',
  clearMocks: true,
};

export default config;