import type { Plugin } from 'prettier';
import * as plugin from 'prettier-plugin-jsdoc';
import type { Options } from 'prettier-plugin-jsdoc';

export const prettierPluginJsdoc = plugin as unknown as Plugin<unknown>;

export const PRETTIER_PLUGIN_JSDOC_CONFIG: Options = {
  jsdocPrintWidth: 120,
} as const;
