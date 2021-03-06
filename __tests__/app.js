'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const process = require('process');

describe('generator-polymer-typescript:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
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
      'webpack.config.js',
      'webpack.test.js',
      'test/index.html',
      'test/test.ejs',
      'test/test.ts',
      'test/modules.json',
      'types/polymer-redux.ts',
      'src/index.ejs',
      'src/index.ts',
      'src/redux/action/index.ts',
      'src/redux/reducer/index.ts',
      'src/redux/store/index.ts',
      'src/container/my-project/my-project.html',
      'src/container/my-project/my-project.ts',
      'src/container/my-project/test-my-project.html',
      'src/container/my-project/test-my-project.ts',
      'src/lib/my-api/my-api.ts',
      'src/lib/my-api/test-my-api.ts',
      'demo/serverMockup.js'
    ]);
  });

  it('fills index.ts with project data', () => {
    assert.fileContent('src/index.ts', 'import "./container/my-project/my-project"');
  });
  it('fills test.ts with project data', () => {
    assert.fileContent(
      'test/test.ts',
      'import "./../src/container/my-project/test-my-project"'
    );
  });
  it('fills modules.json with project data', () => {
    assert.JSONFileContent('test/modules.json', [
      { module: 'my-project', dir: 'src/container/my-project' }
    ]);
  });
  it('fills my-app.ts with project data', () => {
    assert.fileContent(
      'src/container/my-project/my-project.ts',
      'export class MyProject extends ReduxMixin(Polymer.Element)'
    );
  });

  it('should have create directory', () => {
    const dir = process.cwd().split('/');
    assert.equal(dir[dir.length - 1], 'my-project');
  });
});
