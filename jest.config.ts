import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest/presets/js-with-ts-esm",
  resolver: "ts-jest-resolver",
};

export default jestConfig;
