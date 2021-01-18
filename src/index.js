/*
 * @Author: Bryan
 * @Date: 2020-12-29 14:12:35
 * @Last Modified by: Bryan
 * @Last Modified time: 2021-01-18 10:15:36
 */

module.exports = function ({types: t}) {
  return {
    visitor: {
      ImportDeclaration(path, {opts}) {
        const {libraryName, alias} = opts
        if (!t.isStringLiteral(path.node.source, {value: libraryName})) {
          return
        }
        let raw = ''
        const arr = path.node.specifiers.map(item => {
          raw = `${alias}/${item.local.name}`
          console.log(raw)
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
