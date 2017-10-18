# My-App

This project combine typescript, polymer and redux.
To provide a lightweights but powerful web app framework.

## stack

This are the main technologies selected for this project and purpose of use

    __TypeScript__

    Leverage on typeScript syntax and strong typing to create a self documented code that scale at larger teams.
    Resource: https://www.typescriptlang.org/

    __ES6 Modules__

    Create standard JavaScript modules easy to reuse.

    Resource: http://2ality.com/2014/09/es6-modules-final.html

    __webCompoments with Polymer2__

    Polymer is a JavaScript library that helps you create custom reusable HTML elements.
    Resource: https://www.polymer-project.org

    __State management with Polymer redux__

    Redux make easy complex state management of applications.
    Resource: https://github.com/tur-nr/polymer-redux

    __Routing with redux routing__

    Application routing integrated with Redux to mirror application state in the URL.
    Resource: https://www.npmjs.com/package/redux-routing

    __Testing with webComponent tester__

    Power full testing suite to test both webComponent and ES6 module.
    Resource: https://github.com/Polymer/web-component-tester

    __Bundle with webpack__

    Tranform our typeScrip code to packaged javascript application.
    ressource: https://webpack.js.org/

    __Package management with npm and bower.__

    Basicaly Bower is use to install client side package and Npm to development dependency.

    While the plan is to migrate to yarn and npm dependency, some taktik and ozone client modules are available only on npm.




## command

`npm install`: install project dependency.

`npm run tsc`: run typeScript compiler.

`npm run build` build and bundle application with webpack.

`npm run demo` launch application with webpack server.

`npm run test` bundle test files with webpack and run test with webComponent tester.

`npm run build:test:watch` bundle test files with webpack and watch on changes.

`npm run doc` generate project documentation with typedoc.


## directories

|- src project source

    |--- lib (API and helper) in pure ES6 TypeScript module.

        Are concerned with non UI computational tasks such as API access, data treatment, communication, data storage...

        There are stateless.

        Interact this others modules via asynchronous function call.

        There are build from a factory and most of the time there are singleton.

    |--- presentational reusable webComponent

        Are concerned with how thinks look

        Don’t specify how the data is loaded ore mutate

        receive data via attribute or function call.

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





