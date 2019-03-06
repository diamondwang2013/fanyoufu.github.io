const fs = require('fs')
const path = require('path')
var readline = require('readline')

function updataSideBar(articleList){
    let fileName =".vuepress/sidebar.js"
    console.info(articleList,fileName)
    let content = "module.exports = " + JSON.stringify(articleList)

    fs.writeFileSync(fileName, content)
}

  //     # 程序之道

  // 1. [如何提高专注](./how-to-focus-on.md)  `创建：2019-12-23`  `编辑:231-34-89`

  // 2. [跨域问题](./get-to-kown-cros.md)
function updateReadmeMD(articleList, readmeFileName, dirName) {
    try{
        let contentList = ['# ' + dirName]
        articleList.forEach((it, index) => {
          let content = `${index + 1}. [${it.fileTitle}](./${it.fileName}) `
          content += '`创建:' + it.birthtime + ', 修改于:' + it.lastModifyTime + '`'
      
          contentList.push(content)
        })
      
        fs.writeFileSync(readmeFileName, contentList.join('\r\n'))
    }catch(e){
        console.info(e)
        console.info(articleList, readmeFileName, dirName)
    }
}

function updateReadme(articleList, readmeFileName, dirName) {
  let content = `---
title: ${dirName}
secondIndex: true
tableData: ${JSON.stringify(articleList)}
---
`
  fs.writeFileSync(readmeFileName, content)
}

function getTitleFromFileSync(fileName) {
  var fs = require('fs')
  var num = fs.readFileSync(fileName).toString()
  var arr = num.split('\n')
  var title = ''
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].trim().indexOf('#') > -1) {
      title = arr[i].replace(/\#/g, '').trim()
      break
    }
  }
  return title
}
function getTitleFromFile(fReadName) {
  return new Promise((resolve, reject) => {
    try {
      var objReadline = readline.createInterface({
        input: fs.createReadStream(fReadName)
      })
      var title = ''
      objReadline.on('line', function(line) {
        if (line.trim().indexOf('#') > -1) {
          title = line.replace(/\#/g, '').trim()
          objReadline.close()
        }
        console.log('line:' + line.trim().indexOf('#'))
      })
      objReadline.on('close', function() {
        objReadline.input.close()
        objReadline.removeAllListeners('line')
        resolve(title)
      })
    } catch (e) {
      reject(e)
    }
  })
}

let url = path.resolve('./')

const allDepart = fs.readdirSync(url)
const cateLog = {}
allDepart.forEach(name => {
  let sectionName = path.join(url, name)
  let stat = fs.statSync(sectionName)

  if (stat.isDirectory() && !name.includes('.')) {
    // console.info(sectionName);
    let files = fs.readdirSync(sectionName)
    // console.info(files)
    let articleList = []
    cateLog['/'+name+"/"] = ['']

    files.forEach(file => {
        try{
            if (file !== 'README.md') {
              let stat = fs.statSync(path.join(sectionName, file))
              let info = {
                parentName:'/'+name+"/",
                birthtime: stat.birthtime.toLocaleString(),
                lastModifyTime: stat.mtime.toLocaleString(),
                fileName: file,
                fileTitle: getTitleFromFileSync(path.join(sectionName, file))
              }
              articleList.push(info);
              cateLog['/'+name+"/"].push(file)
            }
        }catch(e){
            console.info(file)
        }
    })

    updateReadmeMD(articleList, path.join(sectionName, 'README.md'), name)

    // console.info(sectionName,articleList);
}
})

updataSideBar(cateLog)
console.info("good! update all Chapter directory")
