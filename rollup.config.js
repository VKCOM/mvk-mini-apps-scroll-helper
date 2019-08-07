import path from 'path';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import bundleSize from 'rollup-plugin-bundle-size';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const IS_PROD = process.env.NODE_ENV === 'production';
const INPUT_FILE = path.resolve(__dirname, 'src/main.js');

const plugins = [
  babel(), //
  nodeResolve({ mainFields: ['module', 'jsnext'] }),
  commonjs(),
  bundleSize()
];

export default {
  plugins,
  input: INPUT_FILE,
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    ...(IS_PROD
      ? [
          {
            name: pkg.umdName,
            file: pkg.browser,
            format: 'umd'
          }
        ]
      : [])
  ]
};
