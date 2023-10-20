import React from "react";
import * as MoroboxAIEditorSDK from "moroboxai-editor-sdk";
import * as MoroboxAIEditor from "moroboxai-editor-web";
import { init as _init } from "moroboxai-editor-web";

type EditorContainerProps = MoroboxAIEditor.EditorOptions & {
    className?: string;
    _ref: React.RefObject<HTMLDivElement>;
};

type EditorContainerState = {};

class EditorContainer extends React.Component<
    EditorContainerProps,
    EditorContainerState
> {
    private _editor?: MoroboxAIEditorSDK.IEditor;

    componentDidMount(): void {
        if (this._editor !== undefined) return;

        this._editor = _init({
            element: this.props._ref.current!,
            language: this.props.language,
            url: this.props.url,
            value: this.props.value,
            width: this.props.width,
            height: this.props.height,
            onRun: this.props.onRun,
            onStop: this.props.onStop,
            onLanguageChanged: this.props.onLanguageChanged,
            aceOptions: this.props.aceOptions
        }) as MoroboxAIEditorSDK.IEditor;
    }

    componentWillUnmount(): void {
        if (this._editor !== undefined) {
            this._editor.remove();
            this._editor = undefined;
        }
    }

    render() {
        return (
            <div className={this.props.className ?? ""} ref={this.props._ref} />
        );
    }
}

export default EditorContainer;
