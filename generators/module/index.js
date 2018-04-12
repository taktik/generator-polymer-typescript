'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const parseArg = require('../../utility/parseArg');

class ModuleGenerator extends Generator {
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
    let prompt;
    const name = parseArg.getAppName();

    if (name) {
      prompt = Promise.resolve({ name });
    } else {
      prompt = this.prompt(prompts);
    }
    return prompt.then(props => {
      this.composeWith(require.resolve('../base'), { name: props.name });
      this.composeWith(require.resolve('./compozer'), { name: props.name });
      // To access props later use this.props.someAnswer;
      this.projectName = props.name;
    });
  }
}

module.exports = ModuleGenerator;
