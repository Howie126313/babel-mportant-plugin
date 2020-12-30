/*
 * @Author: Howie 
 * @Date: 2019-07-17 09:36:40 
 * @Last Modified by: Bryan
 * @Last Modified time: 2020-12-30 13:47:46
 */

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

let baseConf = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
    name: 'named'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};

export default baseConf
