# Bridge

> Bridge of native and web

[![node](https://img.shields.io/node/v/@cqlinkoff/bridge.svg)](https://www.npmjs.com/package/@cqlinkoff/bridge)
[![npm](https://img.shields.io/npm/v/@cqlinkoff/bridge.svg)](https://www.npmjs.com/package/@cqlinkoff/bridge)
[![license](https://img.shields.io/npm/l/@cqlinkoff/bridge.svg)](https://github.com/cqlinkoff/bridge/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/cqlinkoff/bridge.svg?branch=master)](https://travis-ci.org/cqlinkoff/bridge)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![Coverage Status](https://coveralls.io/repos/github/cqlinkoff/bridge/badge.svg?branch=master)](https://coveralls.io/github/cqlinkoff/bridge?branch=master)

## Installation

```bash
npm i @cqlinkoff/bridge
```

## Use

```js
import Bridge from '@cqlinkoff/bridge'

const bridge = new Bridge('namespace')

bridge.call(func, args)

bridge.addEventListener(event, handler)

bridge.removeEventListener(event, handler)
```

## API

- `bridge.call(funcName: string, args: any)`: call native function with args

- `bridge.addEventListener(event: string, handler: function)`: add event listener

- `bridge.removeEventListener(event: string, handler: function)`: remove event listener
