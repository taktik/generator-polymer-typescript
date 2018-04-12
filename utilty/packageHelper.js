const fs = require('fs');

// Const destPath = './package.json';
// const sourcePath = './generators/app/templates/package.json';
const RefPackageJson = require('../package');

function update(depType, packageJson) {
  for (let dep in packageJson[depType]) {
    // eslint-disable-next-line no-prototype-builtins
    if (RefPackageJson[depType].hasOwnProperty(dep)) {
      packageJson[depType][dep] = RefPackageJson[depType][dep];
    } else {
      throw new Error(`Missing package ${dep} in project package.json`);
    }
  }
}

function updateDependencies(source) {
  const packageJson = require(source);

  update('dependencies', packageJson);
  update('devDependencies', packageJson);
  return JSON.stringify(packageJson, null, 2);
}

function reportDependency(sourcePath, destPath) {
  const dest = require(destPath);
  const source = require(sourcePath);

  function extract(depType) {
    for (let dep in source[depType]) {
      // eslint-disable-next-line no-prototype-builtins
      if (dest[depType].hasOwnProperty(dep)) {
        dest[depType][dep] = source[depType][dep];
      }
    }
  }

  extract('dependencies');
  extract('devDependencies');

  fs.writeFileSync(destPath, JSON.stringify(dest, null, 2));
}
module.exports = {
  updateDependencies,
  reportDependency
};
