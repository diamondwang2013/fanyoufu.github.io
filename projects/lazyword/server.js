const word = process.argv.slice(2);
console.info(word);
const fs = require("fs");
const request = require("request");
let url = "http://dict.youdao.com/dictvoice?audio=" + word;
request(url)
  .pipe(fs.createWriteStream("./source/" + word + ".mp3"))
  .on("close", function() {
    console.log("saved");
  });