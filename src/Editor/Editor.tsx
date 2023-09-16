import React from "react";
import EditorContainer from "../EditorContainer";
import type { Language } from "moroboxai-editor-web";

type EditorProps = {
    className?: string;
    language?: Language;
    url?: string;
    value?: string;
    width?: string;
    height?: string;
    onLoad?: (language: Language, value: string) => void;
    onUnload?: () => void;
};

type EditorState = {};

class Editor extends React.Component<EditorProps, EditorState> {
    private _refContainer: React.RefObject<HTMLDivElement>;

    constructor(props: EditorProps | Readonly<EditorProps>) {
        super(props);
        //this.state = {};

        this._refContainer = React.createRef<HTMLDivElement>();
    }

    render() {
        return <EditorContainer _ref={this._refContainer} {...this.props} />;
    }
}

export default Editor;
