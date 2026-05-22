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

Create or update the `prettier.config.ts` file in your projects root directory accordingly.

```ts
export default '@boehringer-ingelheim/prettier-config';
```

The shared config already includes a set of Prettier plugins for common file types, so no extra plugin setup is required for those languages.

#### Extend configuration

> [!NOTE]
> This is not recommended as the goal is to have similar settings in all projects, but if for some reason you need to add or change the configuration, it is possible in the following way.

Add your own plugin while keeping the bundled ones:

```ts
import boehringer from '@boehringer-ingelheim/prettier-config';
import type { Config } from '@boehringer-ingelheim/prettier-config';

import myCustomPlugin from 'prettier-plugin-my-custom-plugin';

const config = {
  ...boehringer,
  printWidth: 140,
  plugins: [...(boehringer.plugins ?? []), myCustomPlugin],
} as const satisfies Config;

export default config;
```

Disable all bundled plugins:

```ts
import boehringer from '@boehringer-ingelheim/prettier-config';
import type { Config } from '@boehringer-ingelheim/prettier-config';

const config = {
  ...boehringer,
  plugins: [],
} as const satisfies Config;

export default config;
```

### Run

```sh
npx prettier --write .
```

## Options

Opinionated Options that differ from the standard Prettier [options](https://prettier.io/docs/en/options.html).

### Print Width

Specify the line length that the printer will wrap on.

```ts
printWidth: 120;
```

### Single Quotes

Use single quotes instead of double quotes. (This only applies if there are the same number of single quotes as double quotes in the string. See the [strings rationale in the prettier docs](https://prettier.io/docs/en/rationale#strings) for more information)

_We have chosen single quotes over double quotes, as it is the most common option for JS/TS (open-source) projects. Reference: <https://bytearcher.com/articles/single-or-double-quotes-strings-javascript/>_

```ts
singleQuote: true;
```

### Plugins

The configuration ships with these plugins and options:

- [`prettier-plugin-groovy`](https://github.com/nice-move/prettier-plugin-groovy)
- [`prettier-plugin-nginx`](https://github.com/jxddk/prettier-plugin-nginx)
- [`prettier-plugin-pkg`](https://github.com/un-ts/prettier/tree/master/packages/pkg)
- [`prettier-plugin-sh`](https://github.com/un-ts/prettier/tree/master/packages/sh)
- [`prettier-plugin-sql`](https://github.com/un-ts/prettier/tree/master/packages/sql)

  ```js
  /** @type {import('prettier-plugin-sql').SqlBaseOptions} */
  const prettierPluginSqlConfig = {
    dataTypeCase: 'upper',
    functionCase: 'upper',
    keywordCase: 'upper',
    language: 'postgresql',
  };
  ```

- [`prettier-plugin-jsdoc`](https://github.com/hosseinmd/prettier-plugin-jsdoc)

  ```js
  /** @type {import('prettier-plugin-jsdoc').Options} */
  const prettierPluginJsdocConfig = {
    jsdocPrintWidth: 120,
  };
  ```

> [!TIP]
> If you extend this config and add your own plugins, merge with the existing `plugins` array instead of replacing it.

```ts
import boehringer from '@boehringer-ingelheim/prettier-config';
import type { Config } from '@boehringer-ingelheim/prettier-config';

const config = {
  ...boehringer,
  jsdocPrintWidth: 80,
  language: 'sqlite',
} as const satisfies Config;

export default config;
```

### Check Ignore Pragma

Skip formatting files that start with an ignore pragma (`@noprettier` or `@noformat`).

```ts
checkIgnorePragma: true;
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

Copyright © 2026 [Boehringer Ingelheim](https://github.com/boehringer-ingelheim).\
This project is [MIT](https://github.com/boehringer-ingelheim/prettier-config/blob/master/LICENSE) licensed.

## Resources

- <https://prettier.io/>
- <https://conventionalcommits.org/en/v1.0.0/>
- <https://semantic-release.gitbook.io/>
- <https://semver.org/>
