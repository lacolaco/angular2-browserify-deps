# angular2-browserify-deps

[![npm version](https://badge.fury.io/js/angular2-browserify-deps.svg)](https://badge.fury.io/js/angular2-browserify-deps)

Dependencies set for Angular2 with Browserify

v0.**11**.x --> For Angular2 Beta.**11**

## Usage

npm install

```
$ npm i -S angular2-browserify-deps
```


in your index.ts

```
import "angular2-browserify-deps";

boostrap(App, [...]);
```

or index.js

```
require("angular2-browserify-deps");

boostrap(App, [...]);
```

## Depends on ...

```
/**
 * ES6 Polyfills
 */
require("es6-promise");
require("es6-collections");

/**
 * Zone.js
 */
require("zone.js/dist/zone");
require("zone.js/dist/long-stack-trace-zone");

/**
 * ReflectMetadata
 */
require("reflect-metadata");

/**
 * RxJS
 */
require("rxjs/Rx");
```