const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (name,content) => {
    fs.writeFile(name,content,(err) => {
        if (err) throw err;
    })
    // your code here
};

module.exports.mkdir = (name) => {
  fs.mkdir(name, (err) =>{
      if (err) throw err;
    })
  
    // your code here
};