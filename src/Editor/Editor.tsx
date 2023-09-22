import React from "react";
import EditorContainer from "../EditorContainer";
import * as MoroboxAIEditor from "moroboxai-editor-web";

type EditorProps = {
    className?: string;
    language?: MoroboxAIEditor.Language;
    url?: string | MoroboxAIEditor.IURLFactory;
    value?: string | MoroboxAIEditor.IValueFactory;
    width?: string;
    height?: string;
    onLoad?: MoroboxAIEditor.OnLoadCallback;
    onUnload?: MoroboxAIEditor.OnUnloadCallback;
    onLanguageChanged?: MoroboxAIEditor.OnLanguageChangedCallback;
    aceOptions?: any;
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
