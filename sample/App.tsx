import React from "react";
import type { Language } from "moroboxai-editor-web";
import Editor from "../src";

import "./App.css";

type AppProps = {};

type AppState = {
    attached: boolean;
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = { attached: true };

        this.handleLoad = this.handleLoad.bind(this);
        this.handleUnload = this.handleUnload.bind(this);
        this.handleLanguageChanged = this.handleLanguageChanged.bind(this);
        this.handleAttach = this.handleAttach.bind(this);
    }

    handleLoad(language: Language, code: string) {
        console.log("load", language, code);
    }

    handleUnload() {
        console.log("unload");
    }

    handleLanguageChanged(language: Language) {
        console.log("selected language", language);
    }

    handleAttach() {
        this.setState({ attached: !this.state.attached });
    }

    render() {
        const { attached } = this.state;

        const editor = attached ? (
            <Editor
                url="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/pong/agent.*"
                width="500px"
                height="400px"
                onLoad={this.handleLoad}
                onUnload={this.handleUnload}
                onLanguageChanged={this.handleLanguageChanged}
            />
        ) : (
            <></>
        );

        return (
            <>
                <div className="horizontal">
                    <div id="editor">{editor}</div>
                </div>
                <div className="info horizontal">
                    <button onClick={this.handleAttach}>
                        {attached ? "Detach Editor" : "Attach Editor"}
                    </button>
                </div>
                <div className="info">
                </div>
            </>
        );
    }
}

export default App;
