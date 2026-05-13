import type { Config, Plugin } from 'prettier';
import prettierPluginGroovy from 'prettier-plugin-groovy';
import prettierPluginNginx from 'prettier-plugin-nginx';
import prettierPluginPkg from 'prettier-plugin-pkg';
import * as prettierPluginSh from 'prettier-plugin-sh';
import { PRETTIER_PLUGIN_JSDOC_CONFIG, prettierPluginJsdoc } from './prettier-plugin-jsdoc.ts';
import { PRETTIER_PLUGIN_SQL_CONFIG, prettierPluginSql } from './prettier-plugin-sql.ts';

const plugins = [
  prettierPluginGroovy,
  prettierPluginNginx as unknown as Plugin,
  prettierPluginPkg,
  prettierPluginSh,
  prettierPluginSql,
  // Should be the last one to avoid conflicts
  prettierPluginJsdoc,
] as const satisfies Config['plugins'];

const pluginConfigs = {
  ...PRETTIER_PLUGIN_JSDOC_CONFIG,
  ...PRETTIER_PLUGIN_SQL_CONFIG,
} as const satisfies Omit<Config, 'plugins'>;

export default {
  plugins,
  ...pluginConfigs,
  printWidth: 120,
  singleQuote: true,
  checkIgnorePragma: true,
} as const satisfies Config;
