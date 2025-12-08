/** @type {import('@commitlint/types').UserConfig}  */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // See: https://commitlint.js.org/#/reference-rules
  rules: {
    'body-max-line-length': [0, 'always', Infinity], // Disabled rule, since the release notes via semantic-release in the commit body message can be appropriately long.
    'footer-max-line-length': [0, 'always', Infinity], // Disabled rule, since the release notes via semantic-release in the commit footer message can be appropriately long.
  },
};
