/*
 * @Author: Howie 
 * @Date: 2019-07-17 16:47:04 
 * @Last Modified by: Bryan
 * @Last Modified time: 2020-12-30 13:43:53
 */

const pkg = require('../package.json')
const readLine = require('readline')
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

let rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

let version = pkg.version
let pkgPath = path.join(__dirname, '../package.json')
let question = `🙋‍当前版本${version},请输入发布的版本号:`

rl.question(question, function(prompt) {
  if (!prompt) {
    console.info('版本信息不能为空')
    rl.close()
    return
  }
  fs.readFile(pkgPath, 'utf8', function(err, data) {
    if (err) throw err
    
    let content = JSON.parse(data)
    content.version = prompt
    let newCon = JSON.stringify(content)
    fs.writeFile(pkgPath, newCon, 'utf8', function(writeFileErr) {
      if (writeFileErr) throw writeFileErr
    })
    console.log('readFile')
    
    try {
      exec('npm run build', function (execErr, stdout1, stderr1) {
        console.log('exec1', stdout1)
        console.log('exec1', stderr1)
        if (execErr) {
          console.error(`执行的错误1: ${execErr}`)
          rl.close()
          return;
        }
        exec('npm publish', function (execErr2, stdout2, stderr2) {
          if (execErr2) {
            console.log(`执行的错误2: ${execErr2}`)
            rl.close()
            return;
          }
          console.log('execErr2', execErr2)
          console.log('exec2', stdout2)
          console.log('exec2', stderr2)
          console.info('success done')
          rl.close()
        })
        // console.info('success done')
        // rl.close()
      })
    }
    catch (catchErr) {
      console.log(999, catchErr)
    }
    finally {
      rl.close()
    }
    
  })
})

