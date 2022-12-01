const test = require("node:test");
const assert = require("node:assert/strict");
const configFile = require("./index");

test("Prettier Configuration File", () => {
  assert.ok(configFile, "is valid module export");
  assert.ok(typeof configFile === "object", "is type of object");
});
