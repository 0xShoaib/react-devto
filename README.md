## react-devto

[![npm](https://img.shields.io/npm/v/react-devto.svg)](https://www.npmjs.com/package/react-devto)
![npm](https://img.shields.io/npm/dw/react-devto.svg)
![GitHub issues](https://img.shields.io/github/issues/devaman/react-devto.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/devaman/react-devto.svg)
[![HitCount](http://hits.dwyl.io/devaman/react-devto.svg)](http://hits.dwyl.io/devaman/react-devto)

A React Component that renders all yours Dev.to articles to your website.

## Installation

You can install the `react-devto` package by using `npm` or `yarn`

```
  npm install --save react-devto

  or

  yarn add react-devto

```

## Importing

You simply need to `import` the `Article` component from `react-devto` package.

```
  import Article from 'react-devto'
```

## Usage

```
import React from "react";
import Article from "react-devto";

function App() {
  return (
    <div className="App">
      <Article name="username" />
    </div>
  );
}

export default App;
```

## Note

- `name` prop is required.
- `name` prop value should be your `dev.to` username
