/*
 * @Author: Bryan
 * @Date: 2020-12-29 14:12:35
 * @Last Modified by: Bryan
 * @Last Modified time: 2021-01-16 17:43:38
 */

module.exports = function ({types: t}) {
  return {
    visitor: {
      ImportDeclaration(path, {opts}) {
        const {libraryName} = opts
        if (!t.isStringLiteral(path.node.source, {value: libraryName})) {
          return
        }
        let raw = ''
        const arr = path.node.specifiers.map(item => {
          raw = `landz-sensors-fullstack/dist/${item.local.name}.js`
          // if (item.local.name.includes('Mini')) {
          //   raw = 'landz-sensors-fullstack/dist/weChat'
          // } else {
          //   raw = 'landz-sensors-fullstack/dist/index'
          // }
          return t.importDeclaration(
            [t.importSpecifier(item.local, {
              'type': 'Identifier',
              'name': item.local.name
            })],
            t.stringLiteral(raw)
          )
        })
        path.replaceWithMultiple(arr)
      }
    }
  }
}
