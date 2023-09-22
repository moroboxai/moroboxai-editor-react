import React from "react";
import * as MoroboxAIEditor from "moroboxai-editor-web";
import { init as _init } from "moroboxai-editor-web";

type EditorContainerProps = {
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
    _ref: React.RefObject<HTMLDivElement>;
};

type EditorContainerState = {};

class EditorContainer extends React.Component<
    EditorContainerProps,
    EditorContainerState
> {
    private _editor?: MoroboxAIEditor.IEditor;

    componentDidMount(): void {
        this._editor = _init({
            element: this.props._ref.current!,
            language: this.props.language,
            url: this.props.url,
            value: this.props.value,
            width: this.props.width,
            height: this.props.height,
            onLoad: this.props.onLoad,
            onUnload: this.props.onUnload,
            onLanguageChanged: this.props.onLanguageChanged,
            aceOptions: this.props.aceOptions
        }) as MoroboxAIEditor.IEditor;
    }

    componentWillUnmount(): void {
        if (this._editor !== undefined) {
            this._editor.remove();
            this._editor = undefined;
        }
    }

    render() {
        return (
            <div
                className={"mai-editor " + (this.props.className || "")}
                ref={this.props._ref}
            />
        );
    }
}

export default EditorContainer;
