import React from "react";
import Editor from "@monaco-editor/react";

type EditorContainerProps = {
    value?: string,
    _ref: React.RefObject<HTMLDivElement>
};

type EditorContainerState = {};

class EditorContainer extends React.Component<EditorContainerProps, EditorContainerState> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
        //this.state = {};

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(): void {
    }

    componentWillUnmount(): void {
    }

    onChange(value: unknown, ev: unknown) {

    }

    render() {
        return (
            <div className="mai-code-editor" ref={this.props._ref}>
                <div className="mai-toolbar d-flex flex-row">
                    <div className="mai-buttons d-flex flex-row">
                        <input type="button" value="Run"></input>
                    </div>
                    <span className="mai-language">Javascript</span>
                </div>
                <Editor
                    height="20em"
                    width="30em"
                    value={this.props.value}
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    theme="vs-dark"
                    options={{
                        minimap: {
                            enabled: false
                        }
                    }}
                    onChange={this.onChange}/>
            </div>
        );
    }
}

EditorContainer.propTypes = {};

export default EditorContainer;
