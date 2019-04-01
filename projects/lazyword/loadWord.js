const fs = require('fs')
var data = fs.readFileSync('./words.json')
var obj = JSON.parse(data.toString())
var keys = Object.keys(obj)
console.log('同步读取: ' + keys)
const request = require('request')

keys.forEach(word => {
  if (fs.existsSync('./source/' + word + '.mp3')) {
    console.info(word + '已经存在')
  } else {
    let url = 'http://dict.youdao.com/dictvoice?audio=' + word
    request(url)
      .pipe(fs.createWriteStream('./source/' + word + '.mp3'))
      .on('close', function() {
        console.log(word + 'saved')
      })
  }
})
