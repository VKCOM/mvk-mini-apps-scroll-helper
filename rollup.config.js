import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import nodeResolve from 'rollup-plugin-node-resolve';
import bundleSize from 'rollup-plugin-bundle-size';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const IS_PROD = process.env.NODE_ENV === 'production';

const INPUT_FILE = 'src/main.js';

const getPlugins = () => [
	terser(),
	nodeResolve({ mainFields: ['module', 'jsnext'] }),
	commonjs(),
	bundleSize()
];

const cjs = {
	plugins: [babel(), ...getPlugins()],
	input: INPUT_FILE,
	output: {
		file: pkg.main,
		format: 'cjs'
	}
};

const umdAndEs = {
	plugins: getPlugins(),
	input: INPUT_FILE,
	output: [
		{
			name: pkg.umdName,
			file: pkg.browser,
			format: 'umd'
		},
		{
			file: pkg.module,
			format: 'es'
		}
	]
};

const umdMin = {
	plugins: [babel(), ...getPlugins()],
	input: INPUT_FILE,
	output: {
		name: pkg.umdName,
		file: pkg.browser.split('.').reduce((acc, item, i, arr) => {
			return i === arr.length - 1 ? acc + 'min.' + item : acc + item + '.';
		}, ''),
		format: 'umd'
	}
};

export default IS_PROD ? [cjs, umdAndEs, umdMin] : cjs;