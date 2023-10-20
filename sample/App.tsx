import React from "react";
import type { Language, OnRunOptions } from "moroboxai-editor-sdk";
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

        this.handleRun = this.handleRun.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleLanguageChanged = this.handleLanguageChanged.bind(this);
        this.handleAttach = this.handleAttach.bind(this);
    }

    handleRun(options: OnRunOptions) {
        console.log("run", options);
    }

    handleStop() {
        console.log("stop");
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
                language="lua"
                width="500px"
                height="400px"
                onRun={this.handleRun}
                onStop={this.handleStop}
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
                <div className="info"></div>
            </>
        );
    }
}

export default App;
