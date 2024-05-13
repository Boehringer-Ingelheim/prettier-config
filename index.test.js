const test = require('node:test');
const assert = require('node:assert/strict');
const configFile = require('./index');
const prettier = require('prettier');

test('Prettier Configuration File', () => {
  assert.ok(configFile, 'is valid module export');
  assert.ok(typeof configFile === 'object', 'is type of object');
});

test('Line length', async () => {
  const candidate1 = "console.log('Test');\n";
  assert.ok(await prettier.check(candidate1, { ...configFile, filepath: './index.js' }));

  const candidate2 = `console.log('${'a'.repeat(104)}');\n`;
  assert.ok(await prettier.check(candidate2, { ...configFile, filepath: './index.js' }));

  const candidate3 = `console.log('${'a'.repeat(105)}');\n`;
  assert.strictEqual(await prettier.check(candidate3, { ...configFile, filepath: './index.js' }), false);
});

test('Single quotes', async () => {
  const candidate1 = "console.log('Test');\n";
  assert.ok(await prettier.check(candidate1, { ...configFile, filepath: './index.js' }));

  const candidate2 = 'console.log("Test");\n';
  assert.strictEqual(await prettier.check(candidate2, { ...configFile, filepath: './index.js' }), false);
});
