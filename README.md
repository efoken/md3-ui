<h1 align="center">MD3-UI</h1>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/efoken/md3-ui/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@md3-ui/core/latest.svg)](https://www.npmjs.com/package/@md3-ui/core)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@md3-ui/core.svg)](https://bundlephobia.com/package/@md3-ui/core)

</div>

Quickly build beautiful and more accessible [React](https://reactjs.org/) and
[React Native](https://reactnative.dev/) apps based on
[Material Design 3](https://m3.material.io/). Furthermore, MD3-UI is simple and
fully customizable to follow your own design system.

## Supported components

- Buttons
  - Common buttons
  - Icon buttons
- Cards
- Chips
- Navigation bar
- Top app bar

## Installation

MD3-UI is available as an
[npm package](https://www.npmjs.com/package/@md3-ui/core).

```sh
// with yarn
yarn add @md3-ui/core

// with npm
npm i @md3-ui/core
```

## Usage

Here is a simple example to get you started:

```jsx
import { AppRegistry } from "react-native"
import { Md3Provider, FilledButton } from "@md3-ui/core"

function App() {
  return (
    <Md3Provider>
      <FilledButton>Hello World</FilledButton>
    </Md3Provider>
  )
}

AppRegistry.registerComponent("App", () => App)
AppRegistry.runApplication("App", { rootTag: document.querySelector("#app") })
```

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
