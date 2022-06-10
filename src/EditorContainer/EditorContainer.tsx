import React from "react";
import { IEditor, init as _init } from "moroboxai-editor-web";

type EditorContainerProps = {
    className?: string,
    language?: string,
    value?: string,
    width?: string,
    height?: string,
    onLoad?: (value: string) => void,
    onUnload?: () => void,
    _ref: React.RefObject<HTMLDivElement>
};

type EditorContainerState = {};

class EditorContainer extends React.Component<EditorContainerProps, EditorContainerState> {
    static propTypes: any;
    private _editor?: IEditor;

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this._editor = _init({
            element: this.props._ref.current!,
            language: this.props.language,
            value: this.props.value,
            width: this.props.width,
            height: this.props.height,
            onLoad: this.props.onLoad,
            onUnload: this.props.onUnload,
        }) as IEditor;
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
                ref={this.props._ref}/>
        );
    }
}

EditorContainer.propTypes = {};

export default EditorContainer;
