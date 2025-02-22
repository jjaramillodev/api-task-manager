import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^src/(.*)$': '<rootDir>/src/$1',
		'^@core/(.*)$': '<rootDir>/src/core/$1',
		'^@routes/(.*)$': '<rootDir>/src/routes/$1',
		'^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
		'^@models/(.*)$': '<rootDir>/src/models/$1',
		'^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1'
	}
}

export default config
