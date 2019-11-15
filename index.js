const sharp = require("sharp");
const fs = require("fs");

fs.readdir("./img/", (err, files) => {
  if (err) {
    return console.error(err);
  } else {
    files.forEach(file => {
      sharp(`./img/${file}`)
        .jpeg({
          quality: 85,
          chromaSubsampling: "4:4:4"
        })
        .resize({ width: 800 })
        .toFile(`./output/${file}`, function(err) {
          console.log(err);
        });
    });
  }
});
