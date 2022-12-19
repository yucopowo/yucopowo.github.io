import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import UIContext from '../context.js';

// import { useCallback, useState } from 'react';
// const createNewObject = () => ({});
// function useForceUpdate() {
//     const [, setValue] = useState(createNewObject);
//     return useCallback(() => {
//         setValue(createNewObject());
//     }, []);
// }

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  zoom: 4;
  ${props => props.layout_weight && css`
    flex: ${props.layout_weight};
  `}
  ${props => props.w && css`
    width: ${props.w.replace('dp', 'px')};
  `}
`;

const Button = (props) => {
    // console.log('Button render');

    // const forceUpdate = useForceUpdate();
    const { ui } = useContext(UIContext);

    const onClick = () => {
        const widget = ui[props.id];
        if(widget) {
            widget.emit('click');
            // forceUpdate();
            ui.emit('redraw');
        }
    };


    return (
        <StyledButton {...props} className="button" id={props.id} onClick={onClick}>
            {props.text}
        </StyledButton>
    );
};

export default Button;
