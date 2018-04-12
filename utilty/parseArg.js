function getAppName() {
  const nameIndex = process.argv.findIndex(i => /^(--name|-n)$/.test(i)) + 1;
  let returnValue;

  if (process.argv.length > nameIndex && /\w*-\w*/.test(process.argv[nameIndex]))
    returnValue = process.argv[nameIndex];

  return returnValue;
}
module.exports = {
  getAppName
};
