import React from "react";
import * as MoroboxAIEditor from "moroboxai-editor-web";
import { init as _init } from "moroboxai-editor-web";

type EditorContainerProps = {
    className?: string;
    language?: MoroboxAIEditor.Language;
    url?: string;
    value?: string;
    width?: string;
    height?: string;
    onLoad?: (language: MoroboxAIEditor.Language, value: string) => void;
    onUnload?: () => void;
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
            width: "100%",
            height: "100%",
            onLoad: this.props.onLoad,
            onUnload: this.props.onUnload
        }) as MoroboxAIEditor.IEditor;
    }

    componentWillUnmount(): void {
        if (this._editor !== undefined) {
            this._editor.remove();
            this._editor = undefined;
        }
    }

    render() {
        const _props: {
            "data-url"?: string;
            style: React.CSSProperties;
        } = {
            style: {
                width: this.props.width,
                height: this.props.height
            }
        };

        if (this.props.url !== undefined) {
            _props["data-url"] = this.props.url;
        }

        return (
            <div
                className={"mai-editor " + (this.props.className || "")}
                ref={this.props._ref}
                {..._props}
            />
        );
    }
}

export default EditorContainer;
