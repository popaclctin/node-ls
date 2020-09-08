#! node

const fs = require("fs");

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, fileNames) => {
  if (err) {
    console.log(err);
    return;
  }

  const statPromises = fileNames.map((filename) => {
    return lstat(filename);
  });

  const allStats = await Promise.all(statPromises);

  for (let stat of allStats) {
    const index = allStats.indexOf(stat);

    console.log(fileNames[index], stat.isFile());
  }
});

// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(stats);
//     });
//   });
// };
