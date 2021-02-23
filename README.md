# landz-import-babel-plugin
_Babel按需引入插件_

## Install
Using npm:

`
  npm install landz-import-babel-plugin --save-dev
`

# Usage

*libraryName*
需要按需引入的包的名称

*alias*
按需引入后包的地址目录

e.g: 下面是C端神策插件的引入

```
babel: {
  ...
  plugins: [
    [
      landzImportBabelPlugin,
      {
        libraryName: 'landz-sensors-fullstack',
        alias: 'landz-sensors-fullstack/dist'
      }
    ],
    ...
  ]
}
```
