// require modules
const fs = require('fs');
const semver = require('semver');

var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var newVer = semver.inc(pkg.version, 'patch');

pkg.version = newVer;
fs.writeFile('./package.json', JSON.stringify(pkg,null,4),(err) => {
  if (err)
    console.log(err);
  else {
    console.log("Updated package to version",newVer);
  }
});



