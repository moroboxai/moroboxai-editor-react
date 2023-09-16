import React from "react";
import type { Language } from "moroboxai-editor-web";
import Editor from "../src";
import { EDITOR_SDK_VERSION, EDITOR_WEB_VERSION, VERSION } from "../src";

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
        this.handleAttach = this.handleAttach.bind(this);
    }

    handleLoad(language: Language, code: string) {
        console.log("load", language, code);
    }

    handleUnload() {
        console.log("unload");
    }

    handleAttach() {
        this.setState({ attached: !this.state.attached });
    }

    render() {
        const { attached } = this.state;

        const editor = attached ? (
            <Editor
                url={
                    "https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/piximoroxel8ai-sample/sample/agent.js"
                }
                width={"35em"}
                height={"30em"}
                onLoad={this.handleLoad}
                onUnload={this.handleUnload}
            />
        ) : (
            <></>
        );

        return (
            <>
                <div className={"horizontal"}>
                    <div id={"editor"}>{editor}</div>
                </div>
                <div className={"info horizontal"}>
                    <button onClick={this.handleAttach}>
                        {attached ? "Detach Editor" : "Attach Editor"}
                    </button>
                </div>
                <div className={"info"}>
                    <div>moroboxai-editor-sdk v{EDITOR_SDK_VERSION}</div>
                    <div>moroboxai-editor-web v{EDITOR_WEB_VERSION}</div>
                    <div>moroboxai-editor-react v{VERSION}</div>
                </div>
            </>
        );
    }
}

export default App;
