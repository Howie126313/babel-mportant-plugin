/*
 * @Author: Bryan
 * @Date: 2020-12-29 14:12:35
 * @Last Modified by: Bryan
 * @Last Modified time: 2020-12-30 13:41:05
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
          if (item.local.name.includes('Mini')) {
            raw = 'landz-sensors-fullstack/dist/weChat'
          } else {
            raw = 'landz-sensors-fullstack/dist/index'
          }
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
