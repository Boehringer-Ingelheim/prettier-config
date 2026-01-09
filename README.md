# Prettier Configuration

> Prettier is an opinionated code formatter and removes all original styling and ensures that all outputted code conforms to a consistent code style across your entire codebase. - <https://prettier.io/docs/en/index.html>

This is the shared prettier configuration used at [Boehringer Ingelheim](https://github.com/orgs/Boehringer-Ingelheim) for code formatting.

[![npm version](https://img.shields.io/npm/v/@boehringer-ingelheim/prettier-config?style=for-the-badge)](https://www.npmjs.com/package/@boehringer-ingelheim/prettier-config)
[![npm downloads](https://img.shields.io/npm/dm/@boehringer-ingelheim/prettier-config?style=for-the-badge)](https://www.npmjs.com/package/@boehringer-ingelheim/prettier-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://github.com/boehringer-ingelheim/prettier-config/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/boehringer-ingelheim/prettier-config/graphs/commit-activity)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-green.svg?logo=conventional-commits&style=for-the-badge)](https://conventionalcommits.org)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-494949?logo=semantic-release&style=for-the-badge)](https://github.com/semantic-release/semantic-release)

## Usage

### Install the package

```sh
npm install --save-dev @boehringer-ingelheim/prettier-config
```

### Add the configuration

Create or update the `.prettierrc.js` file in your projects root directory accordingly.

```js
module.exports = require('@boehringer-ingelheim/prettier-config');
```

#### Extend configuration

This is not recommended as the goal is to have similar settings in all projects, but if for some reason you need to add or change the configuration, it is possible in the following way.

```js
module.exports = {
  ...require('@boehringer-ingelheim/prettier-config'),
  printWidth: 140,
};
```

### Run

```sh
npx prettier --write .
```

## Options

Opinionated Options that differ from the standard Prettier [options](https://prettier.io/docs/en/options.html).

### Print Width

Specify the line length that the printer will wrap on.

```js
printWidth: 120;
```

### Single Quotes

Use single quotes instead of double quotes. (This only applies if there are the same number of single quotes as double quotes in the string. See the [strings rationale in the prettier docs](https://prettier.io/docs/en/rationale#strings) for more information)

_We have chosen single quotes over double quotes, as it is the most common option for JS/TS (open-source) projects. Reference: <https://bytearcher.com/articles/single-or-double-quotes-strings-javascript/>_

```js
singleQuote: true;
```

## Local Development

### Install Dependencies

```sh
npm install
```

### Test

```sh
npm test
```

### Repair

This command may be useful when obscure errors or issues are encountered. It removes and recreates dependencies of your project.

```sh
npm run repair
```

### Release

> [!IMPORTANT]  
> Manual releases are not supported to ensure consistency and security, see: <https://docs.npmjs.com/trusted-publishers>

Releases are automated through GitHub Actions using [semantic-release](https://github.com/semantic-release).
It bumps the version according to conventional commits, publishes the package to npm and release a new version to GitHub.

```sh
npm run release
```

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2024 [Boehringer Ingelheim](https://github.com/boehringer-ingelheim).\
This project is [MIT](https://github.com/boehringer-ingelheim/prettier-config/blob/master/LICENSE) licensed.

## Resources

- <https://prettier.io/>
- <https://conventionalcommits.org/en/v1.0.0/>
- <https://semantic-release.gitbook.io/>
- <https://semver.org/>
