'use strict';
const process = require('process');
const mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

class ModuleGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.projectName = opts.name;
  }
  writing() {
    if (process.cwd() !== this.projectName) {
      this.log(
        `Your generator must be inside a folder named ${this
          .projectName}\nI'll automatically create this folder.`
      );
      try {
        mkdirp(this.projectName);
        this.destinationRoot(this.destinationPath(this.projectName));
      } catch (e) {
        console.log('Error occure');
        console.log(e);
        throw e;
      }
    }

    this.fs.copy(this.templatePath('Readme.md'), this.destinationPath('Readme.md'));
    this.fs.copy(this.templatePath('bower.json'), this.destinationPath('bower.json'));
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
    this.fs.copy(
      this.templatePath('wct.conf.template'),
      this.destinationPath('wct.conf.js')
    );
    this.fs.copy(this.templatePath('git_ignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('npm_ignore'), this.destinationPath('.npmignore'));
    this.fs.copy(this.templatePath('.travis.yml'), this.destinationPath('.travis.yml'));
    this.fs.copy(
      this.templatePath('test/index.html'),
      this.destinationPath('test/index.html')
    );
    this.fs.copy(
      this.templatePath('test/test.ejs'),
      this.destinationPath('test/test.ejs')
    );
  }

  install() {
    this.installDependencies();
  }
}

module.exports = ModuleGenerator;
