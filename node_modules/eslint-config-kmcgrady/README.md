# eslint-config-kmcgrady

[![Build][build-img]][build-url]
[![Chat][chat-img]][chat-url]
[![License][license-img]][license-url]
[![NPM][npm-img]][npm-url]

Ken McGrady's shareable ESLint configuration

## Philosophy

A major aspect of the [ESLint philosophy](eslint_philosophy) is that it doesn't promote any particular coding style. While there are many different styles of writing JavaScript, the ESLint rules in this shareable configuration adhere the following philosophy.

- Declare all available rules
- Support ECMAScript 5 and above
- Be compatible with alternative parsers
- Break the build when code fails any rule
- Equip developers with powerful semantics
- Teach developers how to write maintainable code
- Allow any rule to be overridden on a per project basis

## Dependencies

| Dependency                   | Type     | Version              |
|------------------------------|----------|----------------------|
| [eslint][eslint]             | Peer     | `^3.10.2`            |
| [eslint-plugin-react][react] | Required | `^6.7.1`             |
| [node][node]                 | Engine   | `^4.2.0 || >= 6.0.0` |

## Global usage

Install the package globally.

```shell
npm install -g eslint eslint-config-kmcgrady
```

Change into your project's directory.

```shell
cd path/to/project
```

Create a `.eslintrc.js` configuration file.

```shell
touch .eslintrc.js
```

Add [language configuration][language] and [environment configuration][environment] to the `.eslintrc.js` file.

```js
module.exports = {
  extends: [
    'kmcgrady/browser',
    'kmcgrady/es6'
  ]
};
```

Run `eslint` globally and fix any linting errors.

```shell
eslint .
```

## Local usage

Change into your project's directory.

```shell
cd path/to/project
```

If you haven't already, create a `package.json` file.

```shell
npm init
```

Install the package locally and add it to the `package.json` file as a development dependency.

```shell
npm install -D eslint eslint-config-kmcgrady
```

Create a `.eslintrc.js` configuration file.

```shell
touch .eslintrc.js
```

Add [language configuration][language] and [environmnent configuration][environment] to the `.eslintrc.js` file.

```js
module.exports = {
  extends: [
    'kmcgrady/browser',
    'kmcgrady/es6'
  ]
};
```

Run `eslint` locally and fix any linting errors.

```shell
./node_modules/.bin/eslint .
```

Additionally, add a script to the `package.json` file.

```json
{
  "script": {
    "lint": "eslint"
  }
}
```

Then run the `npm` script and fix any linting errors.

```shell
npm run lint .
```

## Language configuration

A project is linted by **one** of the following language configurations.

| Language     | Module            |
|--------------|-------------------|
| ECMAScript 5 | `kmcgrady/es5`   |
| ECMAScript 6 | `kmcgrady/es6`   |
| ECMAScript 7 | `kmcgrady/es7`   |
| ECMAScript 8 | `kmcgrady/es8`   |

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project.

```js
module.exports = {
  extends: 'kmcgrady/es6'
};
```

Or add the following code to the `.eslintrc.js` file of an ECMAScript 7 project.

```js
module.exports = {
  extends: 'kmcgrady/es7'
};
```

## Overriding rules

Customize any rule by overriding it in the `.eslintrc.js` file.

```js
module.exports = {
  extends: 'kmcgrady/es6',

  rules: {
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
  }
};
```

## Environment configuration

Additionally, a project is linted by **any** of the following environment configurations.

| Environment | Module                  |
|-------------|-------------------------|
| browser     | `kmcgrady/browser`     |
| Express     | `kmcgrady/express`     |
| jQuery      | `kmcgrady/jquery`      |
| Materialize | `kmcgrady/materialize` |
| Mocha       | `kmcgrady/mocha`       |
| Node.js     | `kmcgrady/node`        |
| React       | `kmcgrady/react`       |

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project that's running in a browser.

```js
module.exports = {
  extends: [
    'kmcgrady/browser',
    'kmcgrady/es6'
  ]
};
```

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project that's running in a browser and using jQuery.

```js
module.exports = {
  extends: [
    'kmcgrady/browser',
    'kmcgrady/es6',
    'kmcgrady/jquery'
  ]
};
```

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project that's running in Node.js.

```js
module.exports = {
  extends: [
    'kmcgrady/es6',
    'kmcgrady/node'
  ]
};
```

Add the following code to the `.eslintrc.js` file of an ECMAScript 6 project that's running in both a browser and Node.js as well as using React.

```js
module.exports = {
  extends: [
    'kmcgrady/browser',
    'kmcgrady/es6',
    'kmcgrady/node',
    'kmcgrady/react'
  ]
};
```

**NOTE:** To include `.jsx` files in the linting, use the `eslint . --ext .js,.jsx` command.

## Parsers options

Parser options, like support for ECMAScript 6 modules, can be specified in the `.eslintrc.js` file.

```js
module.exports = {
  extends: [
    'kmcgrady/browser',
    'kmcgrady/es6',
    'kmcgrady/node',
    'kmcgrady/react'
  ],

  parserOptions: {
    sourceType: 'module'
  }
};
```

## Alternative parsers

The default parser is [Espree][espree] but alternative parsers, like [babel-eslint][babel], can be specified in the `.eslintrc.js` file.

```js
module.exports = {
  extends: [
    'kmcgrady/browser',
    'kmcgrady/es6',
    'kmcgrady/node',
    'kmcgrady/react'
  ],

  parser: 'babel-eslint'
};
```

## ESLint environments

Additional [ESLint environments][env], like `worker`, can also be specified in the `.eslintrc.js` file.

```js
module.exports = {
  env: {
    worker: true
  },

  extends: [
    'kmcgrady/browser',
    'kmcgrady/es6',
    'kmcgrady/node',
    'kmcgrady/react'
  ]
};
```

## Contributing

If you want to customize any of the rules for your own project, see the section on [overriding rules][overriding] to learn how.

Pull requests are very much welcome for the following.

- Fixing bugs
- Adding tests
- Writing documentation
- Adding rules for another plugin (e.g. [eslint-plugin-angular][angular])
- Changing rules that don't follow the [project's philosophy][philosophy]

## Credits

Thanks to the Shopify team for publishing [eslint-config-shopify][shopify] under a permissive license.

Also, thanks to my colleagues and students at [Galvanize][galvanize] for helping me with testing.

[build-img]: https://img.shields.io/travis/kmcgrady/eslint-config-kmcgrady/master.svg?style=flat-square
[build-url]: https://travis-ci.org/kmcgrady/eslint-config-kmcgrady
[chat-img]: https://img.shields.io/gitter/room/eslint-config-kmcgrady/Lobby.svg?style=flat-square
[chat-url]: https://gitter.im/eslint-config-kmcgrady/Lobby
[license-img]: https://img.shields.io/npm/l/eslint-config-kmcgrady.svg?style=flat-square
[license-url]: https://github.com/kmcgrady/eslint-config-kmcgrady/blob/master/LICENSE
[npm-img]: https://img.shields.io/npm/v/eslint-config-kmcgrady.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/eslint-config-kmcgrady

[angular]: https://github.com/Gillespie59/eslint-plugin-angular
[babel]: https://github.com/babel/babel-eslint
[env]: http://eslint.org/docs/user-guide/configuring#specifying-environments
[eslint]: http://eslint.org/
[eslint_philosophy]: http://eslint.org/docs/about/
[espree]: https://github.com/eslint/espree
[galvanize]: http://www.galvanize.com/
[node]: https://nodejs.org/
[react]: https://github.com/yannickcr/eslint-plugin-react
[shopify]: https://github.com/Shopify/eslint-config-shopify
[language]: #language-configuration
[overriding]: #overriding-rules
[philosophy]: #philosophy
[environment]: #environment-configuration
