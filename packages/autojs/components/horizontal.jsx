import React from 'react';
import styled from 'styled-components';


const StyledHorizontal = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bg || "unset"};
  //display: flex;
  //flex-direction: row;
`;
const Horizontal = (props) => {
    return (
        <StyledHorizontal className="horizontal" {...props}>
            {props.children}
        </StyledHorizontal>
    );
};

export default Horizontal;
