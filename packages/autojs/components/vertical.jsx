import React from 'react';
import styled from 'styled-components';

const StyledVertical = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bg || "unset"};
`;

const Vertical = (props) => {
    return (
        <StyledVertical className="vertical" {...props}>
            {props.children}
        </StyledVertical>
    );
};

export default Vertical;
