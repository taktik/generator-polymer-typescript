'use strict';
const Generator = require('yeoman-generator');
const _ = require('lodash');
const packageHelper = require('../../utility/packageHelper');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.projectName = opts.name;
  }

  writing() {
    this.fs.write(
      this.destinationPath('package.json'),
      packageHelper.updateDependencies(this.templatePath('package.json'))
    );

    this.fs.copy(
      this.templatePath('webpack.test.template'),
      this.destinationPath('webpack.test.js')
    );

    this.fs.copyTpl(
      this.templatePath('src/index.ejs'),
      this.destinationPath('src/index.ejs'),
      {
        projecName: this.projectName,
        src: '<%= htmlWebpackPlugin.files.js[0] %>'
      }
    );

    this.fs.copyTpl(
      this.templatePath('src/index.ts'),
      this.destinationPath('src/index.ts'),
      { projecName: this.projectName }
    );

    this.fs.copyTpl(
      this.templatePath('test/test.ts'),
      this.destinationPath('test/test.ts'),
      { projecName: this.projectName }
    );
    this.fs.writeJSON(this.destinationPath('test/modules.json'), [
      { module: this.projectName, dir: `src/${this.projectName}` }
    ]);
    const appFiles = [`my-app.ts`, `test-my-app.ts`];

    appFiles.forEach(fileName => {
      this.fs.copyTpl(
        this.templatePath(`src/my-app/${fileName}`),
        this.destinationPath(
          `src/${this.projectName}/${fileName.replace('my-app', this.projectName)}`
        ),
        {
          projecName: this.projectName,
          projecNameCamelCase: _.upperFirst(_.camelCase(this.projectName))
        }
      );
    });
  }
};
