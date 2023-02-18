module.exports = {
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
