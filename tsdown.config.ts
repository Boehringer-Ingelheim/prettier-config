import { defineConfig } from 'tsdown';

// Further information: https://tsdown.dev/options/config-file
export default defineConfig({
  deps: {
    skipNodeModulesBundle: true,
  },
  exports: true,
  entry: ['./src/index.js'],
  dts: true,
  format: {
    esm: {
      target: ['es2015'],
    },
    cjs: {
      target: ['node20'],
    },
  },
});
