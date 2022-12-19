import React from 'react';
import styled from 'styled-components';

const StyledFrame = styled.div`
  width: 100%;
  //height: 100%;
  font-size: 0;
  background-color: ${props => props.bg || "unset"};
`;
const Frame = (props) => {
    return (
        <StyledFrame className="frame" {...props}>{props.children}</StyledFrame>
    );
};

export default Frame;
