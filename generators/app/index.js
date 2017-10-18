'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wicked ' + chalk.red('generator-polymer-typescript') + ' generator!'
    ));

    const prompts = [{
      name: 'name',
      message: 'Your project name?',
      default: 'my-app',validate: str => {
        return /.{1,}-.{1,}/.test(str);
      },
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.projectName = props.name;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('Readme.md'),
      this.destinationPath('Readme.md')
    );
    this.fs.copy(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
    this.fs.copy(
      this.templatePath('wct.conf.template'),
      this.destinationPath('wct.conf.js')
    );
    this.fs.copy(
      this.templatePath('webpack.config.template'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('webpack.test.template'),
      this.destinationPath('webpack.test.js')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('.npmignore'),
      this.destinationPath('.npmignore')
    );
    this.fs.copy(
      this.templatePath('.travis.yml'),
      this.destinationPath('.travis.yml')
    );
    this.fs.copy(
      this.templatePath('test/index.html'),
      this.destinationPath('test/index.html')
    );
    this.fs.copy(
      this.templatePath('test/test.ejs'),
      this.destinationPath('test/test.ejs')
    );
    this.fs.copyTpl(
      this.templatePath('test/test.ts'),
      this.destinationPath('test/test.ts'),
      {projecName: this.projectName},
    );
    this.fs.writeJSON(
      this.destinationPath('test/modules.json'),
      [
        {module: this.projectName, dir: `src/container/${this.projectName}`},
        {module: "my-module", dir: `src/presentational/my-module`},
        {module: "my-api", dir: `src/lib/my-api`},
      ]
    );
    this.fs.copy(
      this.templatePath('types/polymer-redux.ts'),
      this.destinationPath('types/polymer-redux.ts')
    );
    this.fs.copyTpl(
      this.templatePath('src/index.ts'),
      this.destinationPath('src/index.ts'),
      {projecName: this.projectName},
    );

    this.fs.copy(
      this.templatePath('src/index.ejs'),
      this.destinationPath('src/index.ejs')
    );
    this.fs.copy(
      this.templatePath('src/store/index.ts'),
      this.destinationPath('src/store/index.ts')
    );

    this.fs.write(
      this.destinationPath('src/action/index.ts'), ''
    );
    this.fs.write(
      this.destinationPath('src/reducer/index.ts'), ''
    );
    ////////////
    //TODO move below code to sub-generators

    const appFiles = [`my-app.html`, `my-app.ts`, `test-my-app.html`, `test-my-app.ts`];

    appFiles.forEach((fileName)=>{
      this.fs.copyTpl(
        this.templatePath(`src/container/my-app/${fileName}`),
        this.destinationPath(`src/container/${this.projectName}/${fileName.replace('my-app', this.projectName)}`),
        {
          projecName: this.projectName,
          projecNameCamelCase:_.upperFirst(_.camelCase(this.projectName)),
        },
      );
    });

    const moduleFiles = [`my-module.html`, `my-module.ts`, `test-my-module.html`, `test-my-module.ts`];

    moduleFiles.forEach((fileName)=>{
      this.fs.copy(
        this.templatePath(`src/presentational/my-module/${fileName}`),
        this.destinationPath(`src/presentational/my-module/${fileName}`),
      );
    });
    const apiFiles = [`my-api.ts`, `test-my-api.ts`];

    apiFiles.forEach((fileName)=>{
      this.fs.copy(
        this.templatePath(`src/lib/my-api/${fileName}`),
        this.destinationPath(`src/lib/my-api/${fileName}`),
      );
    });
  }

  install() {
    this.installDependencies();
  }
};
