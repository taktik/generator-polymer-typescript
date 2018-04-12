# generator-polymer-typescript [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/hubjac1/generator-polymer-typescript.svg)](https://greenkeeper.io/)
> generator for polymer2 typescript and redux application

## Installation

First, install [Yeoman](http://yeoman.io) and generator-polymer-typescript using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).
Require node version above 6.0.0 

```bash
npm install -g yo
npm install -g generator-polymer-typescript
```

## Commands

 * `yo polymer-typescript` generates a full polymer-redux typeScript project.
 * `yo polymer-typescript:module` generates a project for pure typeScript ES6 module.
 * `yo polymer-typescript:material` generates project with one Polymer element.
 

Then generate your new project:

```bash
yo polymer-typescript
```


## stack

These are the main technologies selected for this project and purpose of use

  __TypeScript__

  Leverage on typeScript syntax and strong typing to create a self documented code that scale at larger teams.
  
  Resource: [typeScript official site](https://www.typescriptlang.org/)

  __ES6 Modules__

  Create standard JavaScript modules that are easy to reuse.

  Resource: [es6 modules explain](http://2ality.com/2014/09/es6-modules-final.html)

  __webCompoments with Polymer2__

  Polymer is a JavaScript library that helps you create custom reusable HTML elements.
  Resource: [Polymer](https://www.polymer-project.org)

  __State management with Polymer redux__

  Redux make easy complex state management of applications.
  Resource: [polymer-redux](https://github.com/tur-nr/polymer-redux)

  __Routing with redux routing__

  Application routing integrated with Redux to mirror application state in the URL.
  Resource: [redux-routing](https://www.npmjs.com/package/redux-routing)

  __Testing with webComponent tester__

  Power full testing suite to test both webComponent and ES6 module.
  Resource: [web-component-tester](https://github.com/Polymer/web-component-tester)

  __Bundle with webpack__

  Tranform our typeScrip code to packaged javascript application.
  ressource: [webpack](https://webpack.js.org/)

  __Package management with npm and bower.__

  Bower is used to install client side package and Npm mainly to development dependency.
  




## command

`npm install`: install project dependency.

`npm run tsc`: run typeScript compiler.

`npm run build` build and bundle application with webpack.

`npm run demo` launch application with webpack server.

`npm run test` bundle test files with webpack and run test with webComponent tester.

`npm run build:test:watch` bundle test files with webpack and watch on changes.

`npm run test:persist` bundle test files with webpack and watch on changes.

`npm run doc` generate project documentation with typedoc.


## directories

  |- src project source

  |--- lib (API and helper) in pure ES6 TypeScript module.

      Are concerned with non UI computational tasks such as API access, data treatment, communication, data storage...

      They are stateless.

      Interact with others modules via asynchronous function calls.

      They are built from a factory and most of the time They are singletons.

  |--- presentational reusable webComponent

      Are concerned with how thinks look

      Don’t specify how the data is loaded or mutated

      receive data via attributes or function calls.

      Are notifying container component of change via event bubbling

  |--- container redux-polymer components

      Are concerned with how thinks works

      May encapsulate other containers and presentational modules.

      Provide data and configuration to other containers

      They act as controller between other modules.


  |--- action, reducer and store Redux helper

      Register Redux action and reducer to encapsulate Redux dependency outside library and presentational modules.


|- test contains test boilerplate.

    Register you modules under test `test.ts` and `modules.json`

|- types typing
    declare files for modules where declaration is missing.



## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [hubjac1]()


[npm-image]: https://badge.fury.io/js/generator-polymer-typescript.svg
[npm-url]: https://npmjs.org/package/generator-polymer-typescript
[travis-image]: https://travis-ci.org/hubjac1/generator-polymer-typescript.svg?branch=master
[travis-url]: https://travis-ci.org/hubjac1/generator-polymer-typescript
[daviddm-image]: https://david-dm.org/taktik/generator-polymer-typescript.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/taktik/generator-polymer-typescript
