import test from 'node:test';
import assert from 'node:assert/strict';
import configFile from './index';
import prettier from 'prettier';

/**
 * The file path is only used to help Prettier infer the parser from the file extension.
 *
 * @see https://prettier.io/docs/options#file-path
 */
const FILE_PATH = 'test-file.ts';

test('Prettier Configuration File', () => {
  assert.ok(configFile, 'is valid module export');
  assert.ok(typeof configFile === 'object', 'is type of object');
});

test('Line length', async () => {
  const candidate1 = "console.log('Test');\n";
  assert.ok(await prettier.check(candidate1, { ...configFile, filepath: FILE_PATH }));

  const candidate2 = `console.log('${'a'.repeat(104)}');\n`;
  assert.ok(await prettier.check(candidate2, { ...configFile, filepath: FILE_PATH }));

  const candidate3 = `console.log('${'a'.repeat(105)}');\n`;
  assert.strictEqual(await prettier.check(candidate3, { ...configFile, filepath: FILE_PATH }), false);
});

test('Single quotes', async () => {
  const candidate1 = "console.log('Test');\n";
  assert.ok(await prettier.check(candidate1, { ...configFile, filepath: FILE_PATH }));

  const candidate2 = 'console.log("Test");\n';
  assert.strictEqual(await prettier.check(candidate2, { ...configFile, filepath: FILE_PATH }), false);
});
