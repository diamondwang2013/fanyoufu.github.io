window.addEventListener('load', e => {
  let baseurl = 'http://dict.youdao.com/dictvoice?audio='
  document.getElementById('wordsList').addEventListener('click', e => {
    let aduioid = e.target.innerText
    console.dir(e.target.innerText)
    document.getElementById(aduioid).src =
      'http://dict.youdao.com/dictvoice?audio=' + e.target.innerText

    document.getElementById(aduioid).addEventListener('canplay', () => {
      document.getElementById(aduioid).play()
    })
  })
  console.info(this)

  function buildWords(objList) {
    objList.forEach(item => {
      var a = 'asdf'
      let btn = document.createElement('button')
      btn.innerText = item.en

      document.getElementById('wordsList').appendChild(btn)

      let audio = document.createElement('audio')
      audio.id = item.en
      let source = document.createElement('source')
      source.src = baseUrl + item.en
      source.type = 'aduio/mpeg'
      document.getElementById('audioList').appendChild(audio)
    })
  }
  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType('application/json')
    rawFile.open('GET', file, true)
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == '200') {
        callback(rawFile.responseText)
      }
    }
    rawFile.send(null)
  }

  //usage:
  readTextFile('./words.json', function(text) {
    var data = JSON.parse(text)
    console.log(data)
    let dataList = Object.keys(data).map(item => {
      return {
        zh: data[item],
        en: item
      }
    })
    buildWords(dataList)
  })
})
