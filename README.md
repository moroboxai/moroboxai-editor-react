# moroboxai-editor-react

[![NPM version](https://img.shields.io/npm/v/moroboxai-editor-react.svg)](https://www.npmjs.com/package/moroboxai-editor-react)
![Node.js CI](https://github.com/moroboxai/moroboxai-editor-react/workflows/Node.js%20CI/badge.svg)
[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moroboxai/moroboxai-editor-react/blob/master/LICENSE)

Embeddable code editor for coding AIs for [MoroboxAI](https://github.com/moroboxai) in [React](https://reactjs.org/).

## Installation

Using npm:

```bash
npm install moroboxai-editor-react --save
```

Or:

```bash
git clone https://github.com/moroboxai/moroboxai-editor-react.git
cd moroboxai-editor-react
npm i
npm run build
```

## Usage

Setup a simple React app with:

```bash
npx create-react-app my-app --template typescript
```

Add `moroboxai-editor-react` as a dependency:

```bash
cd my-app
npm install moroboxai-editor-react --save
```

Replace `src/App.tsx` with:

```javascript
import './App.css';
import Editor from 'moroboxai-editor-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Editor
          value={'function foo() {\n  console.log("foo");\n}\n'}
          width="500px"
          height="400px"/>
      </header>
    </div>
  );
}

export default App;
```

Build and start a local server to see the result:

```bash
npm run build
npm run start
```

## Playground

This package provides a minimal `React` app under the `playground` directory for playing with and testing the library.

You can run the playground locally on port 3000 with:

 ```bash
 git clone https://github.com/moroboxai/moroboxai-editor-react.git
 cd moroboxai-editor-react
 npm i
 cd playground
 npm i
 npm run dev
 ```

If you want to change something in the library, go to `moroboxai-editor-react/src/...`, the library will be automatically re-built and the playground will use the latest build

## Props

| Name   |      Type      |  Default |  Description |
|:----------|:-------------|:------|:------|
| language | string | javascript | Selected language |
| value | string || Initial content of the editor |
| width | string || Width of the `div` element |
| height | string || Height of the `div` element |
| className | string || Class name for the `div` container |
| onLoad | func | noop | **Signature: function(value: string) => void** <br/> Function called when the Load button is clicked |
| onUnload | func | noop | **Signature: function() => void** <br/> Function called when the Unload button is clicked |

## License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
