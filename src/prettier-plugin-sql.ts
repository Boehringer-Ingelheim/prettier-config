import type { SqlBaseOptions } from 'prettier-plugin-sql';

export { default as prettierPluginSql } from 'prettier-plugin-sql';

export const PRETTIER_PLUGIN_SQL_CONFIG: SqlBaseOptions = {
  dataTypeCase: 'upper',
  functionCase: 'upper',
  keywordCase: 'upper',
} as const;
