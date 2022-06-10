import React from 'react';

import Editor from '../../lib/es';

function App() {
    return (
        <Editor
            value={'function a() {\n  console.log("test");\n}\n'}
            width='500px'
            height='400px'
            language='javascript'
            onLoad={(data) => {console.log(data);}}
            onUnload={() => {console.log("unload");}} />
    );
}

export default App;