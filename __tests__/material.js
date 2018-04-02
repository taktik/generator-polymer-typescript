'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const process = require('process');

describe('generator-polymer-typescript:module', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/material'))
      .withPrompts({ name: 'my-project' });
  });

  it('creates files', () => {
    assert.file([
      'Readme.md',
      'package.json',
      'bower.json',
      'tsconfig.json',
      '.travis.yml',
      '.npmignore',
      '.gitignore',
      'wct.conf.js',
      'webpack.test.js',
      'test/index.html',
      'test/test.ejs',
      'test/test.ts',
      'test/modules.json',
      'src/index.ts',
      'src/my-project/my-project.ts',
      'src/my-project/test-my-project.ts',
      'src/my-project/my-project.html',
      'src/my-project/test-my-project.html'
    ]);
  });

  it('fills index.ts with project data', () => {
    assert.fileContent('src/index.ts', 'import "./my-project/my-project"');
  });
  it('fills test.ts with project data', () => {
    assert.fileContent('test/test.ts', 'import "./../src/my-project/test-my-project"');
  });
  it('fills modules.json with project data', () => {
    assert.JSONFileContent('test/modules.json', [
      { module: 'my-project', dir: 'src/my-project' }
    ]);
  });
  it('fills my-app.ts with project data', () => {
    assert.fileContent(
      'src/my-project/my-project.ts',
      'export class MyProject extends Polymer.Element'
    );
  });

  it('should have create directory', () => {
    const dir = process.cwd().split('/');
    assert.equal(dir[dir.length - 1], 'my-project');
  });
});
