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

    this.fs.copyTpl(
      this.templatePath('src/index.ts'),
      this.destinationPath('src/index.ts'),
      { projecName: this.projectName }
    );

    this.fs.copyTpl(
      this.templatePath('src/index.ejs'),
      this.destinationPath('src/index.ejs'),
      {
        projecName: this.projectName,
        src: '<%= htmlWebpackPlugin.files.js[0] %>'
      }
    );
    this.fs.writeJSON(this.destinationPath('test/modules.json'), [
      { module: this.projectName, dir: `src/container/${this.projectName}` },
      { module: 'my-module', dir: `src/presentational/my-module` },
      { module: 'my-api', dir: `src/lib/my-api` }
    ]);
    this.fs.copy(
      this.templatePath('types/polymer-redux.ts'),
      this.destinationPath('types/polymer-redux.ts')
    );

    this.fs.copy(
      this.templatePath('webpack.config.template'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('webpack.test.template'),
      this.destinationPath('webpack.test.js')
    );

    this.fs.copyTpl(
      this.templatePath('test/test.ts'),
      this.destinationPath('test/test.ts'),
      { projecName: this.projectName }
    );
    this.fs.copy(this.templatePath('src/redux/'), this.destinationPath('src/redux'));

    this.fs.copy(
      this.templatePath('demo/serverMockup.js'),
      this.destinationPath('demo/serverMockup.js')
    );

    const appFiles = [`my-app.html`, `my-app.ts`, `test-my-app.html`, `test-my-app.ts`];

    appFiles.forEach(fileName => {
      this.fs.copyTpl(
        this.templatePath(`src/container/my-app/${fileName}`),
        this.destinationPath(
          `src/container/${this.projectName}/${fileName.replace(
            'my-app',
            this.projectName
          )}`
        ),
        {
          projecName: this.projectName,
          projecNameCamelCase: _.upperFirst(_.camelCase(this.projectName))
        }
      );
    });

    const moduleFiles = [
      `my-module.html`,
      `my-module.ts`,
      `test-my-module.html`,
      `test-my-module.ts`
    ];

    moduleFiles.forEach(fileName => {
      this.fs.copy(
        this.templatePath(`src/presentational/my-module/${fileName}`),
        this.destinationPath(`src/presentational/my-module/${fileName}`)
      );
    });
    const apiFiles = [`my-api.ts`, `test-my-api.ts`];

    apiFiles.forEach(fileName => {
      this.fs.copy(
        this.templatePath(`src/lib/my-api/${fileName}`),
        this.destinationPath(`src/lib/my-api/${fileName}`)
      );
    });
  }
};
