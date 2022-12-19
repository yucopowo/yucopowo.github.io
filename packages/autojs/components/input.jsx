import React from 'react';
import styled from 'styled-components';

// const StyledInput = styled.input`
//   ${props => props.primary && css`
//     flex: ${props => props.layout_weight};
//   `}
// `;

const StyledInput = styled.input(props => ({
    fontSize: props.textSize?props.textSize.replace('sp', 'px'):'14px',
    ... (props.layout_weight)?{
        flex: props.layout_weight
    }:{}
}));



const Input = (props) => {
    return (
        <StyledInput {...props} className="input" id={props.id} defaultValue={props.text} />
    );
};

export default Input;
