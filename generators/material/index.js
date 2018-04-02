'use strict';
const process = require('process');
const mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');
// Const ModuleGenerator = require('../module');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the wicked ' +
          chalk.red('generator-polymer-typescript') +
          ' generator!'
      )
    );

    const prompts = [
      {
        name: 'name',
        message: 'Your project name?',
        default: 'my-app',
        validate: str => {
          return /.{1,}-.{1,}/.test(str);
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      this.composeWith(require.resolve('../base'), { name: props.name });
      this.composeWith(require.resolve('./compozer'), { name: props.name });
      // To access props later use this.props.someAnswer;
      this.projectName = props.name;
    });
  }
};
