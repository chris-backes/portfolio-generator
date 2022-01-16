const fs = require('fs')
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2);
const [profName, github] = profileDataArgs;

  fs.writeFile('index.html', generatePage(profName, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });