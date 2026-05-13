import { defineConfig } from 'tsdown';

// Further information: https://tsdown.dev/options/config-file
export default defineConfig({
  deps: {
    skipNodeModulesBundle: true,
  },
  dts: true,
  entry: ['./src/index.js'],
  exports: true,
  format: {
    cjs: {
      target: ['node20'],
    },
    esm: {
      target: ['es2015'],
    },
  },
});
