/*
 * @Author: Howie 
 * @Date: 2019-07-17 14:14:34 
 * @Last Modified by: Bryan
 * @Last Modified time: 2020-12-30 13:43:31
 */
import uglify from 'rollup-plugin-uglify-es'

import baseConf from './base'

let proConf = baseConf

proConf.plugins.push(uglify())

export default proConf