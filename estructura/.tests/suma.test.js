const { suma } = require("../src/app");

test("la suma debe funcionar", () => {
  expect(suma(2, 3)).toBe(5);
});