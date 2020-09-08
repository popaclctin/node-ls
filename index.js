const fs = require("fs");

fs.readdir(process.cwd(), (err, fileNames) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(fileNames);
});
