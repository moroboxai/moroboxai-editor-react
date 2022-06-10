import React from "react";
import EditorContainer from '../EditorContainer';

type EditorProps = {
    className?: string,
    language?: string,
    value?: string,
    width?: string,
    height?: string,
    onLoad?: (value: string) => void,
    onUnload?: () => void,
};

type EditorState = {};

class Editor extends React.Component<EditorProps, EditorState> {
    static propTypes: any;
    private _refContainer: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props);
        //this.state = {};

        this._refContainer = React.createRef<HTMLDivElement>();
    }

    render() {
        return <EditorContainer
            _ref={this._refContainer}
            {...this.props}/>
    }
}

Editor.propTypes = {};

export default Editor;
