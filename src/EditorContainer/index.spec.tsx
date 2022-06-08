import React from 'react';
import EditorContainer from '.';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<EditorContainer />', () => {
    it('should check render with snapshot', () => {
        const component = render(
            <EditorContainer/>,
        );

        expect(component).toMatchSnapshot();
    });
});