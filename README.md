# Bridge

> Bridge of native and web

[![node](https://img.shields.io/node/v/@cqmbr/bridge.svg)](https://www.npmjs.com/package/@cqmbr/bridge)
[![npm](https://img.shields.io/npm/v/@cqmbr/bridge.svg)](https://www.npmjs.com/package/@cqmbr/bridge)
[![license](https://img.shields.io/npm/l/@cqmbr/bridge.svg)](https://github.com/cqmbr/bridge/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/cqmbr/bridge.svg?branch=master)](https://travis-ci.org/cqmbr/bridge)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![Coverage Status](https://coveralls.io/repos/github/cqmbr/bridge/badge.svg?branch=master)](https://coveralls.io/github/cqmbr/bridge?branch=master)

## Installation

```bash
npm i @cqmbr/bridge
```

## Use

```js
import Bridge from '@cqmbr/bridge'

const bridge = new Bridge('namespace')

bridge.call(func, args)

bridge.addEventListener(event, handler)

bridge.removeEventListener(event, handler)
```

## API

- `bridge.call(funcName: string, args: any)`: call native function with args

- `bridge.addEventListener(event: string, handler: function)`: add event listener

- `bridge.removeEventListener(event: string, handler: function)`: remove event listener
